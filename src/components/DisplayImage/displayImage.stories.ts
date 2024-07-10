import type { Meta, StoryObj } from "@storybook/react";
import { DisplayImage } from "./DisplayImage";

const meta = {
  title: "Primitives/Display/Display Image",
  component: DisplayImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DisplayImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aspectRatio: "4-3",
    imgSrc: "https://picsum.photos/id/56/800/600",
    imgAlt: "Placeholder image",
    width: 800,
    height: 600,
    elevation: "medium",
  },
};
