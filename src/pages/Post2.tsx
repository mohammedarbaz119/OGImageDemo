import Post from "../components/Post";
import data from "@/data";
const Post2 = () => {
  return (
    <Post
      title={data[1].title}
      author={data[1].author}
      date={data[1].date}
      content={data[1].content}
      comments={data[1].comments}
    />
  );
};

export default Post2;
