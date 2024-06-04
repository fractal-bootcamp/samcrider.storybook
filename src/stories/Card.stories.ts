import { Meta, StoryObj } from "@storybook/react/*";
import Card from "../components/Card";

const meta = {
  title: "DisplayItems/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    title: "Primary Card",
    image: "string",
    link: "string",
    description: "Card description",
    backgroundColor: "#9f1919",
  },
};
