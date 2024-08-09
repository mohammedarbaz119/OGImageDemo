import Post from "../components/Post";
import data from "@/data";
const Post4 = () => {
  return (
    <Post
      title={data[3].title}
      author={data[3].author}
      date={data[3].date}
      content={data[3].content}
      comments={data[3].comments}
    />
  );
};

export default Post4;
