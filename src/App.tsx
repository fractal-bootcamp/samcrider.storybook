import "./App.css";
import Post from "./components/Post/Post";
import type { PostType } from "./components/Post/Post";

const fakePost: PostType = {
  userImage: "/profile.PNG",
  userName: "samcrider",
  time: "3 mins ago",
  image: "/post.png",
  description: "wow, I had a good time here",
  likes: 7334,
  comments: 35,
};

function App() {
  return (
    <div className="App">
      <Post
        userImage={fakePost.userImage}
        userName={fakePost.userName}
        time={fakePost.time}
        image={fakePost.image}
        description={fakePost.description}
        likes={fakePost.likes}
        comments={fakePost.comments}
      />
    </div>
  );
}

export default App;
