<template>
  <BaseButton label="Button" :appearance="APPEARANCE.PRIMARY" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { APPEARANCE, SIZE, VARIANT } from "@/constants/attributes";
  import BaseButton from "@/components/atoms/base-button/base-button.vue";

  export default defineComponent({
    name: "Playground",
    components: { BaseButton },
    setup() {
      return { APPEARANCE, SIZE, VARIANT };
    },
  });
</script>
