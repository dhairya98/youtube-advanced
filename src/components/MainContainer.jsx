import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { getVideos } from "./utils/getVideos";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Comedy",
  "Valentines",
  "Badminton",
  "Wrestling",
];

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideos(selectedButton);
      setVideos(data);
    };

    fetchVideos();
  }, [selectedButton]);
  return (
    <div>
      <ButtonList
        list={list}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <VideoContainer videos={videos} />
    </div>
  );
};

export default MainContainer;
