import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/liveChatSlice";
import { generateRandomMessage } from "./utils/helper";
import { useVideoSearch } from "./utils/useVideoSearch";
import VideoContainer from "./VideoContainer";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const isHamburgerOpen = useSelector((store) => store.app.isMenuOpen);
  const liveChatMessage = useSelector((store) => store.liveChat.messages);
  const { videos } = useVideoSearch();
  useEffect(() => {
    const timer = setInterval(() => {
      const { name, message } = generateRandomMessage();
      dispatch(
        addMessage({
          name: name,
          message: message,
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="w-full lg:w-[400px] bg-slate-100 p-2 border rounded-lg ml-0 lg:ml-2">
        <h1 className="font-bold text-lg">Live Chat: </h1>
        <div className="flex flex-col-reverse h-[550px] overflow-y-scroll">
          {liveChatMessage.map((chatMessage, id) => (
            <ChatMessage
              key={id}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 m-2 border border-gray-300 rounded-sm flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Dhairya Anchal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className={`${isHamburgerOpen ? "w-70" : "w-80"} px-2`}
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
      <VideoContainer videos={videos.slice(0, 20)} watch={true} />
    </>
  );
};

export default LiveChat;
