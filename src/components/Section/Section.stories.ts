import type { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";

const meta = {
  title: "Primitives/Containers/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: { layout: "fullwidth" },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Hello, World!" },
};
