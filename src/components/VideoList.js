import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(eachVideo => {
    return (
      <VideoItem
        key={eachVideo.id.videoId}
        onVideoSelect={onVideoSelect}
        video={eachVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
