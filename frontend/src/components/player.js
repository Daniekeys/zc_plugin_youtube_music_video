import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function Player({ play }) {
  if (!play) return null;

  const url = "https://www.youtube.com/watch?v=nBtDsQ4fhXY";

  return (
    <Wrapper>
      <div className="player-now">Now Playing</div>
      <div className="player-player">
        <ReactPlayer url={url} width="100%" />
      </div>
      <div className="player-title">Title of song</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .player-player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
  }

  .player-now,
  .player-title {
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0;
  }
`;

export default Player;
