import { Meta, StoryObj } from "@storybook/react/*";
import Task from "../components/Task/Task";
import { fn } from "@storybook/test";

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

const DefaultTask = {
  title: "Go do the Dishes",
  description: "Clean them all over, buddy.",
  id: 0,
  toggleCompleted: fn(),
};

export const CompletedTask: Story = {
  args: {
    ...DefaultTask,
    completed: true,
  },
};

export const IncompleteTask: Story = {
  args: {
    ...DefaultTask,
    completed: false,
  },
};
