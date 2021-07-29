import GBaseButton from "@/components/atoms/base-button/base-button.vue";
import "@/main.css";
import { App } from "vue";

const components = {
  GBaseButton,
};

const install = (Vue: App): void => {
  for (const component in components) {
    // @ts-ignore Expect errors
    Vue.component(components[component].name, components[component]);
  }
};

export default { install };

export { default as GBaseButton } from "@/components/atoms/base-button/base-button.vue";
