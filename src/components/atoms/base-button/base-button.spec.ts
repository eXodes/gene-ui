import * as stories from "./base-button.stories";
import { composeStories } from "@storybook/testing-vue3";
// TODO: Create an issue related to vite-jest
// import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { APPEARANCE, SIZE, VARIANT } from "@/constants/attributes";
import { classNames } from "@/components/atoms/base-button/base-button.classes";

const { A: Default } = composeStories(stories);

describe("Base Button", () => {
  it("Should render button", async () => {
    render(Default());
    const button = screen.getByTestId("base-button");

    expect(button).toBeVisible();
    expect(button).toMatchSnapshot();
  });

  it("Should render small button", async () => {
    render(
      Default({
        size: SIZE.SMALL,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.size.small);
    expect(button).toMatchSnapshot();
  });

  it("Should render medium button", async () => {
    render(Default());
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.size.medium);
    expect(button).toMatchSnapshot();
  });

  it("Should render large button", async () => {
    render(
      Default({
        size: SIZE.LARGE,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.size.large);
    expect(button).toMatchSnapshot();
  });

  it("Should render default button", async () => {
    render(Default());
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.default);
    expect(button).toMatchSnapshot();
  });

  it("Should render default clear button", async () => {
    render(
      Default({
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.default);
    expect(button).toMatchSnapshot();
  });

  it("Should render primary button", async () => {
    render(
      Default({
        appearance: APPEARANCE.PRIMARY,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.primary);
    expect(button).toMatchSnapshot();
  });

  it("Should render primary clear button", async () => {
    render(
      Default({
        appearance: APPEARANCE.PRIMARY,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.primary);
    expect(button).toMatchSnapshot();
  });

  it("Should render attention button", async () => {
    render(
      Default({
        appearance: APPEARANCE.ATTENTION,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.attention);
    expect(button).toMatchSnapshot();
  });

  it("Should render attention clear button", async () => {
    render(
      Default({
        appearance: APPEARANCE.ATTENTION,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.attention);
    expect(button).toMatchSnapshot();
  });

  it("Should render success button", async () => {
    render(
      Default({
        appearance: APPEARANCE.SUCCESS,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.success);
    expect(button).toMatchSnapshot();
  });

  it("Should render success clear button", async () => {
    render(
      Default({
        appearance: APPEARANCE.SUCCESS,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.success);
    expect(button).toMatchSnapshot();
  });

  it("Should render warning button", async () => {
    render(
      Default({
        appearance: APPEARANCE.WARNING,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.warning);
    expect(button).toMatchSnapshot();
  });

  it("Should render warning clear button", async () => {
    render(
      Default({
        appearance: APPEARANCE.WARNING,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.warning);
    expect(button).toMatchSnapshot();
  });

  it("Should render danger button", async () => {
    render(
      Default({
        appearance: APPEARANCE.DANGER,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.danger);
    expect(button).toMatchSnapshot();
  });

  it("Should render danger clear button", async () => {
    render(
      Default({
        appearance: APPEARANCE.DANGER,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.danger);
    expect(button).toMatchSnapshot();
  });

  it("Should render disabled button", async () => {
    render(
      Default({
        isDisabled: true,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.fill.disabled);
    expect(button).toMatchSnapshot();
  });

  it("Should render disabled clear button", async () => {
    render(
      Default({
        isDisabled: true,
        variant: VARIANT.CLEAR,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass(classNames.appearance.clear.disabled);
    expect(button).toMatchSnapshot();
  });

  it("Should render button as block", async () => {
    render(
      Default({
        block: true,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).toHaveClass("g-w-full");
    expect(button).toMatchSnapshot();
  });

  it("Should render base button", async () => {
    render(
      Default({
        base: true,
      }),
    );
    const button = screen.getByTestId("base-button");

    expect(button).not.toHaveClass("g-rounded-md");
    expect(button).toMatchSnapshot();
  });

  // it("Should be clickable", async () => {
  //   render(Default());
  //   const button = screen.getByTestId("base-button");
  //
  //   userEvent.click(button);
  //   expect(button).toHaveFocus();
  // });

  // it("Should be accessible", async () => {
  //   render(Default());
  //   const button = screen.getByTestId("base-button");
  //
  //   userEvent.tab();
  //   expect(button).toHaveFocus();
  // });
  //
  // it("Should have accessible name", async () => {
  //   render(Default());
  //   const button = screen.getByTestId("base-button");
  //
  //   userEvent.tab();
  //   expect(button).toHaveAccessibleName("Button Text");
  // });
  //
  // it("Should not be clickable when disabled", async () => {
  //   render(
  //     Default({
  //       isDisabled: true,
  //     }),
  //   );
  //   const button = screen.getByTestId("base-button");
  //
  //   userEvent.tab();
  //   expect(button).toBeDisabled();
  // });
  //
  // it("Should not be clickable when loading", async () => {
  //   render(
  //     Default({
  //       isLoading: true,
  //     }),
  //   );
  //   const button = screen.getByTestId("base-button");
  //
  //   userEvent.tab();
  //   expect(button).toBeDisabled();
  // });
});
