// renderCollapsableText.js
import { h } from 'vue';
import CollapsableText from '../components/CollapsableText.vue';
import { renderAnchor } from './renderAnchor';

export function renderCollapsableText(componentData) {
  const renderSlotContent = (content) => {
    const parts = [];
    const anchorRegex = /<Anchor href="([^"]+)">([\s\S]*?)<\/Anchor>/g;
    let lastIndex = 0;
    let match;

    while ((match = anchorRegex.exec(content)) !== null) {
      const [fullMatch, href, label] = match;
      const startIndex = match.index;

      // Add non-anchor HTML content
      if (lastIndex < startIndex) {
        parts.push(h('span', { innerHTML: content.slice(lastIndex, startIndex) }));
      }

      // Add the rendered Anchor component
      parts.push(renderAnchor({ href, label }));
      lastIndex = anchorRegex.lastIndex;
    }

    // Add remaining HTML content after the last anchor
    if (lastIndex < content.length) {
      parts.push(h('span', { innerHTML: content.slice(lastIndex) }));
    }

    // Wrap the parts in a single parent node for Vue to handle
    return h('span', parts);
  };

  return h(
    CollapsableText,
    componentData.props,
    () => renderSlotContent(componentData.slotContent)
  );
}
