<template>
  <div ref="htmlContainer"></div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue';
import { createApp } from 'vue';
import { renderAnchor } from './renderAnchor';
import { renderCollapsableText } from './renderCollapsableText';

export default defineComponent({
  name: 'ComponentRenderer',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const componentsData = ref([]);

    const parsedHtml = () => {
      componentsData.value = [];
      let content = props.content;

      // Step 1: Temporarily replace all <CollapsableText> blocks to skip nested <Anchor> tags
      content = content.replace(/<CollapsableText\s([^>]*)>([\s\S]*?)<\/CollapsableText>/g, (match, propsString, slotContent) => {
        const placeholder = `collapsable-placeholder-${componentsData.value.length}`;
        componentsData.value.push({
          type: 'CollapsableText',
          slotContent,
          props: extractProps(propsString),
          placeholder,
        });
        return `<span data-placeholder="${placeholder}"></span>`;
      });

      // Step 2: Replace standalone <Anchor> tags (outside <CollapsableText>)
      content = content.replace(/<Anchor href="([^"]+)">([\s\S]*?)<\/Anchor>/g, (match, href, label) => {
        const placeholder = `anchor-placeholder-${componentsData.value.length}`;
        componentsData.value.push({ type: 'Anchor', href, label, placeholder });
        return `<span data-placeholder="${placeholder}"></span>`;
      });

      return content;
    };

    const extractProps = (propsString) => {
      const props = {};
      const propPattern = /(:?)(\w+)=(["'])(.*?)\3/g;
      let match;

      while ((match = propPattern.exec(propsString))) {
        const [ , isDynamic, propName, , propValue] = match;
        props[propName] = isDynamic ? JSON.parse(propValue) : propValue;
      }

      return props;
    };

    return {
      parsedHtml,
      componentsData,
    };
  },
  mounted() {
    nextTick(() => {
      const htmlContainer = this.$el;
      htmlContainer.innerHTML = this.parsedHtml();

      this.componentsData.forEach((componentData) => {
        const placeholderSpan = htmlContainer.querySelector(`[data-placeholder="${componentData.placeholder}"]`);

        if (placeholderSpan) {
          let componentVNode;

          if (componentData.type === 'Anchor') {
            componentVNode = renderAnchor(componentData);
          } else if (componentData.type === 'CollapsableText') {
            // Ensure <Anchor> tags in the slot content are rendered without placeholder replacement
            componentVNode = renderCollapsableText(componentData);
          }

          const container = document.createElement('span');
          placeholderSpan.replaceWith(container);
          createApp(componentVNode).mount(container);
        }
      });
    });
  }
});
</script>
