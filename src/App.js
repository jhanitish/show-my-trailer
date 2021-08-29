import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainWrapper, TileWrapper } from "./styles";
import TrailerTile from "./components/TrailerTile";

export default function App() {
  const [trailerData, setTrailerData] = useState([]);
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    axios
      .get("https://b47ae4ac-f461-46a0-9dfd-31c26a7e4d6a.mock.pstmn.io/")
      .then((res) => {
        setTrailerData(res.data.moviesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainWrapper>
      <h1>Show My Trailer</h1>
      <TileWrapper>
        {Object.keys(trailerData).map((val) => {
          const obj = trailerData[val];
          return (
            <TrailerTile
              key={val}
              details={obj}
              onPlayClick={(e, id = "") => setActiveId(id)}
              id={val}
              activeId={activeId}
            />
          );
        })}
      </TileWrapper>
    </MainWrapper>
  );
}
