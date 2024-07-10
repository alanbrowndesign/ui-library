import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Primitives/Display/Icon",
  component: Icon,
  argTypes: {
    iconName: { control: { type: "text" }, defaultValue: "grid_guides" },
    filled: { control: { type: "boolean" } },
    weight: {
      control: {
        type: "inline-radio",
        options: ["light", "regular", "heavy"],
        mapping: { light: "light", regular: "regular", heavy: "heavy" },
      },
    },
  },
  tags: ["autodocs"],
  parameters: { layout: "fullwidth" },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Favorite: Story = { args: { iconName: "favorite" } };
export const Skull: Story = { args: { iconName: "skull", filled: true } };
