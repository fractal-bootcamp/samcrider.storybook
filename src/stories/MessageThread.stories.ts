import { Meta, StoryObj } from "@storybook/react/*";
import MessageThread from "../components/MessageThread/MessageThread";
import "../tailwind.css";

const meta = {
  title: "DisplayItems/MessageThread",
  component: MessageThread,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MessageThread>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryMessageThread: Story = {};
