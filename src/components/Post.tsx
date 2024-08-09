import { ArrowUp, ArrowDown, MessageSquare, Bell, User } from "lucide-react";
// import type { PostDataType } from "@/data";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const RedditPost = ({ title, author, date, content, comments }) => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Reddit-like header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-2 flex items-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight text-red-500">
              reddit
            </span>
          </div>
          <div className="flex-grow">
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Search Reddit"
            />
          </div>
          <div className="flex items-center ml-4">
            <Bell className="text-gray-500 mr-4" size={20} />
            <User className="text-gray-500" size={20} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white border border-gray-300 rounded-md">
          <div className="flex">
            {/* Voting section (static) */}
            <div className="flex flex-col items-center p-2 bg-gray-50">
              <ArrowUp
                className="text-gray-400 cursor-pointer hover:text-red-500"
                size={24}
              />
              <span className="text-xs font-bold my-1">•</span>
              <ArrowDown
                className="text-gray-400 cursor-pointer hover:text-blue-500"
                size={24}
              />
            </div>

            {/* Post content */}
            <div className="p-4 flex-grow">
              {/* Post metadata */}
              <div className="text-xs text-gray-500 mb-2">
                Posted by u/{author} on {date}
              </div>

              {/* Post title */}
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>

              {/* Post content */}
              <div className="text-sm text-gray-800 mb-4">{content}</div>

              {/* Comments count */}
              <div className="flex items-center text-xs text-gray-500 hover:bg-gray-100  px-2 py-1 rounded">
                <MessageSquare size={16} className="mr-1" />
                <span>{comments ? comments.length : "0"} Comments</span>
              </div>
            </div>
          </div>

          {/* Comments section */}
          <div className="bg-gray-50 p-4 border-t">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Comments
            </h3>
            {comments?.map(
              (
                comment: {
                  author:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  text:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded mb-3 shadow-sm"
                >
                  <span className="font-semibold text-xs text-gray-500">
                    u/{comment.author}
                  </span>
                  <p className="mt-1 text-sm">{comment.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditPost;
