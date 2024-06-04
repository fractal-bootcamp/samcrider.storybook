import { Meta, StoryObj } from "@storybook/react/*";
import TaskList from "../components/TaskList/TaskList";

const meta = {
  title: "DisplayItems/TaskList",
  component: TaskList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TaskList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryTaskList: Story = {};
