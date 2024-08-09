import Post1 from "@/pages/Post1";
import Post2 from "@/pages/Post2";
import Post3 from "@/pages/Post3";
import Post4 from "@/pages/Post4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>this is home page</>,
    },
    {
      path: "/1",
      element: <Post1 />,
    },
    {
      path: "/2",
      element: <Post2 />,
    },
    {
      path: "/3",
      element: <Post3 />,
    },
    { path: "/4", element: <Post4 /> },
    {
      path: "*",
      element: <>not found</>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
