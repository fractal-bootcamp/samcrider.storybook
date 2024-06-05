import { Meta, StoryObj } from "@storybook/react/*";
import TabDescriptor from "../components/TabDescriptor/TabDescriptor";

const meta = {
  title: "DisplayItems/TabDescriptor",
  component: TabDescriptor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabDescriptor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryTabDescriptor: Story = {};
