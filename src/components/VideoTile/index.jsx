import React from "react";
import { MainWarapper, VideoWrapper } from "./style";
const VideoTile = (props) => {
  const { url = "https://www.youtube.com/watch?v=tcsJ-3GLDE4" } = props;
  const videoId = url?.split("=")[1];
  const iframe = `<iframe width="100%" height="100%" className="video" title="Youtube player" frameborder="0" allowfullscreen src='https://www.youtube.com/embed/${videoId}' />}`;
  return (
    <>
      <MainWarapper>
        <VideoWrapper
          dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }}
        />
      </MainWarapper>
    </>
  );
};

export default VideoTile;
