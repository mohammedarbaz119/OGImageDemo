import Post from "../components/Post";
import data from "@/data";
const Post1 = () => {
  return (
    <Post
      title={data[0].title}
      author={data[0].author}
      date={data[0].date}
      content={data[0].content}
      comments={data[0].comments}
    />
  );
};

export default Post1;
