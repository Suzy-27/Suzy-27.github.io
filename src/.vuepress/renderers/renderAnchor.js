// renderAnchor.js
import { h } from 'vue';
import Anchor from '../components/Anchor.vue';

/**
 * Renders an Anchor component.
 * @param {Object} componentData - The data for the component.
 * @returns {VNode} - The rendered Anchor component.
 */
export function renderAnchor(componentData) {
  return h(Anchor, { href: componentData.href }, componentData.label);
}
