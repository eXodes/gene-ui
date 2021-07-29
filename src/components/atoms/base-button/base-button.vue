<template>
  <button
    v-bind="$attrs"
    :class="[baseClass, blockClass, styleClass, sizeClass]"
    :disabled="isDisabled || isLoading"
    class="
      g-font-semibold g-tracking-wide g-transition-colors g-duration-100
      focus:g-outline-none focus:g-ring-opacity-50
    "
    data-testid="base-button"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";
  import { APPEARANCE, SIZE, VARIANT } from "@/constants/attributes";
  import { classNames } from "@/components/atoms/base-button/base-button.classes";

  export default defineComponent({
    name: "GBaseButton",
    props: {
      label: {
        type: String,
        default: null,
      },
      appearance: {
        type: String as PropType<APPEARANCE>,
        default: APPEARANCE.DEFAULT,
        validator: (value: APPEARANCE) => {
          return [
            APPEARANCE.DEFAULT,
            APPEARANCE.PRIMARY,
            APPEARANCE.ATTENTION,
            APPEARANCE.SUCCESS,
            APPEARANCE.WARNING,
            APPEARANCE.DANGER,
          ].includes(value);
        },
      },
      size: {
        type: String as PropType<SIZE>,
        default: SIZE.MEDIUM,
        validator: (value: SIZE) => {
          return [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE].includes(value);
        },
      },
      variant: {
        type: String as PropType<VARIANT>,
        default: VARIANT.FILL,
        validator: (value: VARIANT) => {
          return [VARIANT.FILL, VARIANT.CLEAR].includes(value);
        },
      },
      block: {
        type: Boolean,
        default: false,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
      base: {
        type: Boolean,
        default: false,
      },
    },
    emits: {
      click: null,
    },
    setup(props, { emit }) {
      const isFill = computed(() => props.variant === VARIANT.FILL);

      const baseClass = computed(() => !props.base && "g-rounded-md");
      const blockClass = computed(() => props.block && "g-w-full");

      // eslint-disable-next-line vue/return-in-computed-property
      const sizeClass = computed(() => {
        switch (props.size) {
          case SIZE.SMALL:
            return classNames.size.small;
          case SIZE.MEDIUM:
            return classNames.size.medium;
          case SIZE.LARGE:
            return classNames.size.large;
        }
      });

      // eslint-disable-next-line vue/return-in-computed-property
      const styleClass = computed(() => {
        if (props.isDisabled)
          return isFill.value
            ? classNames.appearance.fill.disabled
            : classNames.appearance.clear.disabled;

        if (props.appearance === APPEARANCE.PRIMARY)
          return isFill.value
            ? classNames.appearance.fill.primary
            : classNames.appearance.clear.primary;

        if (props.appearance === APPEARANCE.ATTENTION)
          return isFill.value
            ? classNames.appearance.fill.attention
            : classNames.appearance.clear.attention;

        if (props.appearance === APPEARANCE.SUCCESS)
          return isFill.value
            ? classNames.appearance.fill.success
            : classNames.appearance.clear.success;

        if (props.appearance === APPEARANCE.WARNING)
          return isFill.value
            ? classNames.appearance.fill.warning
            : classNames.appearance.clear.warning;

        if (props.appearance === APPEARANCE.DANGER)
          return isFill.value
            ? classNames.appearance.fill.danger
            : classNames.appearance.clear.danger;

        if (props.appearance === APPEARANCE.DEFAULT)
          return isFill.value
            ? classNames.appearance.fill.default
            : classNames.appearance.clear.default;
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleClick = (e: any) => emit("click", e);

      return { baseClass, blockClass, styleClass, sizeClass, handleClick };
    },
  });
</script>
