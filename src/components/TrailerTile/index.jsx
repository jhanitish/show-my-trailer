import React, { useState, useEffect } from "react";
import { Tile, TileImgWrapper, TileImg, Realease } from "./style";
import { Play } from "../SVG";
import VideoTile from "../VideoTile";

const TrailerTile = (props) => {
  const {
    id = "",
    activeId = "",
    details = {},
    onPlayClick = () => {}
  } = props;
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    if (id === activeId) {
      setShowVideo(true);
    } else {
      setShowVideo(false);
    }
  }, [id, activeId]);
  const currentYear = new Date().getFullYear();
  const realDate = details["ShowDate"];
  const splitArray = (str, by = " ") => str.split(by);
  const firstDate =
    splitArray(realDate, ",")[1].trim() === currentYear
      ? splitArray(splitArray(realDate, ",")[0])[0]
      : splitArray(splitArray(realDate, ",")[0])[1];
  const secondDate =
    splitArray(realDate, ",")[1].trim() === currentYear
      ? splitArray(splitArray(realDate, ",")[0])[1]
      : splitArray(realDate, ",")[1];

  const onPlay = (e) => {
    if (showVideo) {
      onPlayClick(e);
    } else {
      onPlayClick(e, id);
    }
  };
  return (
    <>
      <Tile active={id === activeId}>
        <TileImgWrapper>
          <TileImg
            alt={details["EventTitle"]}
            src={details["EventImageUrl"]}
            width="100%"
            height="100%"
            onError={(e) =>
              (e.currentTarget.src =
                "https://in.bmscdn.com/events/mobile/vertical-noimg.png")
            }
          />
        </TileImgWrapper>
        <Realease>
          <div>
            <span>{firstDate}</span>
            <span>{secondDate}</span>
          </div>
        </Realease>
        <Play onPlay={onPlay} />
      </Tile>

      {showVideo && <VideoTile url={details["TrailerURL"]} />}
    </>
  );
};

export default TrailerTile;
