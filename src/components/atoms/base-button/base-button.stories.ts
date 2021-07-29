import BaseButton from "./base-button.vue";
import { APPEARANCE, SIZE, VARIANT } from "@/constants/attributes";
import { Meta, Story } from "@storybook/vue3";

export default <Meta>{
  title: "Component / Atoms / Base Button",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Base button component. Additional button configurations can be done by using the default slot. Should not be used for links. Button limits to the interaction/navigation within the application.",
      },
    },
    action: {
      handles: ["click", "button"],
    },
  },
  component: BaseButton,
  args: {
    label: "Button Text",
    appearance: APPEARANCE.DEFAULT,
    size: SIZE.MEDIUM,
    variant: VARIANT.FILL,
    block: false,
    isLoading: false,
    isDisabled: false,
    base: false,
  },
  argTypes: {
    label: {
      name: "label",
      description:
        "Default button text label. Only shown when slot is not used.",
      control: {
        type: "text",
      },
      table: {
        category: "Props",
        subcategory: "Content",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "null",
        },
      },
    },
    appearance: {
      name: "appearance",
      description: "Appearance affect the color of the button.",
      options: [
        APPEARANCE.DEFAULT,
        APPEARANCE.PRIMARY,
        APPEARANCE.ATTENTION,
        APPEARANCE.SUCCESS,
        APPEARANCE.WARNING,
        APPEARANCE.DANGER,
      ],
      control: {
        type: "select",
      },
      table: {
        category: "Props",
        subcategory: "Style",
        type: {
          summary: "APPEARANCE",
          detail: `${APPEARANCE.DEFAULT}\n${APPEARANCE.PRIMARY}\n${APPEARANCE.ATTENTION}\n${APPEARANCE.SUCCESS}\n${APPEARANCE.WARNING}\n${APPEARANCE.DANGER}`,
        },
        defaultValue: {
          summary: APPEARANCE.DEFAULT,
        },
      },
    },
    size: {
      name: "size",
      description: "Options affect the size of the button.",
      options: [SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE],
      control: {
        type: "select",
      },
      table: {
        category: "Props",
        subcategory: "Style",
        type: {
          summary: "SIZE",
          detail: `${SIZE.SMALL}\n${SIZE.MEDIUM}\n${SIZE.LARGE}`,
        },
        defaultValue: {
          summary: SIZE.MEDIUM,
        },
      },
    },
    variant: {
      name: "variant",
      description:
        "Variants should only used when the `fill` variant is used as the primary CTA.",
      options: [VARIANT.FILL, VARIANT.CLEAR],
      control: {
        type: "select",
      },
      table: {
        category: "Props",
        subcategory: "Style",
        type: {
          summary: "VARIANT",
          detail: `${VARIANT.FILL}\n${VARIANT.CLEAR}`,
        },
        defaultValue: {
          summary: VARIANT.FILL,
        },
      },
    },
    block: {
      name: "block",
      description: "Render button as block to fill the whole width.",
      control: {
        type: "boolean",
        defaultValue: false,
      },
      table: {
        category: "Props",
        subcategory: "Style",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isLoading: {
      name: "isLoading",
      description:
        "Change the state of the button to show that it is currently processing.",
      control: {
        type: "boolean",
        defaultValue: false,
      },
      table: {
        category: "Props",
        subcategory: "State",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isDisabled: {
      name: "isDisabled",
      description:
        "Change the state of the button to disable user interaction.",
      control: {
        type: "boolean",
        defaultValue: false,
      },
      table: {
        category: "Props",
        subcategory: "State",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    base: {
      name: "base",
      description:
        "This property is a special reset for the button in cases where it is used in a groups where the button is a dependent to the parent element.",
      control: {
        type: "boolean",
        defaultValue: false,
      },
      table: {
        category: "Props",
        subcategory: "Reset",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    click: {
      name: "@click",
      description:
        "Button default event. This trigger will get event attributes as the first argument.",
      table: {
        category: "Events",
        type: {
          summary: "Event",
        },
        defaultValue: {
          summary: "event",
        },
      },
    },
    default: {
      name: "#default",
      description:
        "Button default slot. Using the slot will replace the `label` props. Slot can be used to customise the button content.",
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
    },
  },
};

type Props = {
  label: string;
  appearance: APPEARANCE;
  size: SIZE;
  variant: VARIANT;
  block: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  base: boolean;
  onClick: (e: Event) => void;
};

type PropsConfig = {
  fill: {
    small: Partial<Props>;
    medium: Partial<Props>;
    large: Partial<Props>;
  };
  clear: {
    small: Partial<Props>;
    medium: Partial<Props>;
    large: Partial<Props>;
  };
};

const Single: Story<Props> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<base-button v-bind="args" @click="args.onClick" />`,
});

const Combo: Story<PropsConfig> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `
    <base-button class="g-m-auto" label="Button Text" v-bind="args.fill?.small" @click="args.fill?.small.onClick" />
    <base-button class="g-m-auto" label="Button Text" v-bind="args.fill?.medium" @click="args.fill?.medium.onClick" />
    <base-button class="g-m-auto" label="Button Text" v-bind="args.fill?.large" @click="args.fill?.large.onClick" />
    <base-button class="g-m-auto" label="Button Text" v-bind="args.clear?.small" @click="args.clear?.small.onClick" />
    <base-button class="g-m-auto" label="Button Text" v-bind="args.clear?.medium" @click="args.clear?.medium.onClick" />
    <base-button class="g-m-auto" label="Button Text" v-bind="args.clear?.large" @click="args.clear?.large.onClick" />
  `,
});

export const A = Single.bind({});
A.storyName = "Default";
A.decorators = [
  () => ({
    template: `<div class="g-flex g-items-center g-justify-center"><story /></div>`,
  }),
];
A.parameters = {
  options: {},
  docs: {
    source: {
      code: `<g-base-button label="Button Text" />`,
    },
  },
};

export const B = Combo.bind({});
B.storyName = "Default";
B.args = {
  fill: {
    small: {
      size: SIZE.SMALL,
    },
    medium: {
      size: SIZE.MEDIUM,
    },
    large: {
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
B.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
B.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button>Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};

export const C = Combo.bind({});
C.storyName = "Primary";
C.args = {
  fill: {
    small: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.SMALL,
    },
    medium: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.MEDIUM,
    },
    large: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      appearance: APPEARANCE.PRIMARY,
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
C.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
C.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button appearance="primary" size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button appearance="primary">Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button appearance="primary" size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button appearance="primary" size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button appearance="primary" variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button appearance="primary" size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};

export const D = Combo.bind({});
D.storyName = "Attention";
D.args = {
  fill: {
    small: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.SMALL,
    },
    medium: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.MEDIUM,
    },
    large: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      appearance: APPEARANCE.ATTENTION,
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
D.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
D.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button appearance="attention" size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button appearance="attention">Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button appearance="attention" size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button appearance="attention" size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button appearance="attention" variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button appearance="attention" size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};

export const E = Combo.bind({});
E.storyName = "Success";
E.args = {
  fill: {
    small: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.SMALL,
    },
    medium: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.MEDIUM,
    },
    large: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      appearance: APPEARANCE.SUCCESS,
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
E.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
E.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button appearance="success" size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button appearance="success">Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button appearance="success" size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button appearance="success" size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button appearance="success" variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button appearance="success" size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};

export const F = Combo.bind({});
F.storyName = "Warning";
F.args = {
  fill: {
    small: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.SMALL,
    },
    medium: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.MEDIUM,
    },
    large: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      appearance: APPEARANCE.WARNING,
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
F.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
F.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button appearance="warning" size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button appearance="warning">Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button appearance="warning" size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button appearance="warning" size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button appearance="warning" variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button appearance="warning" size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};

export const G = Combo.bind({});
G.storyName = "Danger";
G.args = {
  fill: {
    small: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.SMALL,
    },
    medium: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.MEDIUM,
    },
    large: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.LARGE,
    },
  },
  clear: {
    small: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.SMALL,
      variant: VARIANT.CLEAR,
    },
    medium: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.MEDIUM,
      variant: VARIANT.CLEAR,
    },
    large: {
      appearance: APPEARANCE.DANGER,
      size: SIZE.LARGE,
      variant: VARIANT.CLEAR,
    },
  },
};
G.decorators = [
  () => ({
    template: `<div class="g-grid g-grid-cols-3 g-gap-4 g-place-center"><story /></div>`,
  }),
];
G.parameters = {
  docs: {
    source: {
      code: `
<!-- Fill & Small -->
<g-base-button appearance="danger" size="small">Button Text</g-base-button>
<!-- Fill & Medium -->
<g-base-button appearance="danger">Button Text</g-base-button>
<!-- Fill & Large -->
<g-base-button appearance="danger" size="large">Button Text</g-base-button> 
<!-- Clear & Small -->
<g-base-button appearance="danger" size="small" variant="clear">Button Text</g-base-button> 
<!-- Clear & Medium -->
<g-base-button appearance="danger" variant="clear">Button Text</g-base-button> 
<!-- Clear & Large -->
<g-base-button appearance="danger" size="large" variant="clear">Button Text</g-base-button> 
    `,
    },
  },
};
