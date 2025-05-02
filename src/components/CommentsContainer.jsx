import React, { useState } from "react";
import { generateComments } from "./utils/helper";

const CommentsList = ({ comments }) => {
  return comments.map((comment, id) => (
    <div key={id} className="mt-5">
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  const [videoComments, setVideoComments] = useState(generateComments());
  const [commentInput, setCommentInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      name: "Dhairya Anchal",
      text: commentInput,
      replies: [],
    };

    setVideoComments([newComment, ...videoComments]);
    setCommentInput(""); // clear input
  };
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <form onSubmit={handleSubmit} className="w-full mt-4">
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 outline-none bg-transparent text-sm"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600 transition cursor-pointer"
          >
            Add Comment
          </button>
        </div>
      </form>
      <CommentsList comments={videoComments} />
    </div>
  );
};

export default CommentsContainer;
