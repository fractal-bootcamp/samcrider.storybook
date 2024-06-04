import { Meta, StoryObj } from "@storybook/react/*";
import Post from "../components/Post/Post";

const meta = {
  title: "DisplayItems/Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryPost: Story = {
  args: {
    userImage: "/profile.PNG",
    userName: "samcrider",
    time: "3 mins ago",
    image: "/post.png",
    description: "wow, I had a good time here",
    likes: 7334,
    comments: 35,
  },
};
