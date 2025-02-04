import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta = {
  title: "Primitives/Display/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aspectRatio: "4-3",
    imgSrc: "https://picsum.photos/id/56/800/600",
    imgAlt: "Placeholder image",
    width: 800,
    height: 600,
  },
};
