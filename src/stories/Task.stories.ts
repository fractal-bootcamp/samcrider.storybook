import { Meta, StoryObj } from "@storybook/react/*";
import Task from "../components/Task";

const meta = {
  title: "DisplayItems/Task",
  component: Task,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    title: "Go do the Dishes",
    description: "Clean them all over, buddy.",
  },
};
