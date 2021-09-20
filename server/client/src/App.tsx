import { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

import RoomHeader from "./components/roomHeader";
import MusicRoom from "./components/musicRoom";
import EnterRoom from "./components/Modals/EnterRoom";

import chatMediaQuery from "./utils/chatMedia";

import { uiSelect } from "./store/uiSlice";

import "moment-timezone";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App() {
  chatMediaQuery(); // toggle chat display based on screen size.
  const [showModal, setShowModal] = useState(true);
  const isLoading = useSelector(uiSelect.isLoading);

  return (
    <Wrapper>
      <div className="loader-wrapper">
        {isLoading && (
          <Loader
            visible
            type="BallTriangle"
            color="#27ae60"
            height={80}
            width={80}
          />
        )}
      </div>

      <div>
        <ToastContainer theme="colored" />

        {showModal && <EnterRoom setShowModal={setShowModal} />}

        <RoomHeader />
        <MusicRoom />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* overflow-y: scroll; */
  position: relative;
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 100vh;

  & > * {
    flex-grow: 1;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 6px;
    background-color: #00b87c;
  }

  .loader-wrapper {
    position: absolute;
    top: 100px;
    z-index: 111111;
  }

  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
  }
`;

export default App;
