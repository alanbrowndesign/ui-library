import type { Meta, StoryObj } from "@storybook/react";
import { MainNavigation } from "./MainNavigation";

const meta = {
  title: "Primitives/Navigation/MainNavigation",
  component: MainNavigation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
