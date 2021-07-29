<template>
  <div class="flex g-flex-col g-px-20 g-space-y-2">
    <div class="g-my-10">
      <h1
        class="
          g-font-brand
          g-font-medium
          g-text-3xl
          g-text-center
          g-uppercase
          g-tracking-wider
        "
      >
        {{ title }}
      </h1>
    </div>
    <div
      class="
        g-min-h-[70vh]
        g-container
        g-grid
        g-mx-auto
        g-mt-12
        g-p-10
        g-bg-clear
        g-rounded-3xl
        g-border-2
        g-border-primary-500
        dark:g-bg-gray-800
      "
    >
      <div>
        <playground />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import playground from "@/views/playground.vue";

  export default defineComponent({
    name: "App",
    components: { playground },
    setup() {
      const title = ref("Playground");

      return { title };
    },
  });
</script>
