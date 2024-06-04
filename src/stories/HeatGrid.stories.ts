import { Meta, StoryObj } from "@storybook/react/*";
import HeatGrid from "../components/HeatGrid/HeatGrid";

const meta = {
  title: "DisplayItems/HeatGrid",
  component: HeatGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeatGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryHeatGrid: Story = {};
