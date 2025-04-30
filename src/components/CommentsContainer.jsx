import React from "react";

const commentsData = [
  {
    name: "Ananya Sharma",
    text: "This article was really insightful, thanks for sharing!",
    replies: [],
  },
  {
    name: "Ravi Mehta",
    text: "I have a question about the second point made above.",
    replies: [
      {
        name: "Dhairya Anchal",
        text: "Sure, what specifically do you want to understand better?",
        replies: [],
      },
      {
        name: "Ravi Mehta",
        text: "Specifically the part about performance optimization in React.",
        replies: [
          {
            name: "Dhairya Anchal",
            text: "Ah, got it! It's about avoiding unnecessary re-renders using memoization.",
            replies: [
              {
                name: "Ravi Mehta",
                text: "Thanks! That cleared it up perfectly.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Meera Jain",
    text: "Would love to see more content like this. Subscribed!",
    replies: [],
  },
];

const CommentsList = ({ comments }) =>
  comments.map((comment, id) => (
    <div key={id}>
      <Comment data={comment} />
      <div className="pl-5 border-l ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  console.log("Name and text", name, text);

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
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
