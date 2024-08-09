import Post from "../components/Post";
import data from "@/data";
const Post3 = () => {
  return (
    <Post
      title={data[2].title}
      author={data[2].author}
      date={data[2].date}
      content={data[2].content}
      comments={data[2].comments}
    />
  );
};

export default Post3;
