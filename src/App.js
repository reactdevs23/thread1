import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import PointIcon from "./images/PointIcon";
import User from "./images/User";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "SUMMARY",
      subHeadingColor: "#98A2B3",
      heading: "Thread Conversations",
      headingColor: "#000",
    },
    borderColor: "#000",
    user1: {
      name: "@username ",
      nameColor: "#000",
      userIcon: <User bg="#2970FF" color="#fff" />,

      icon: <PointIcon bg="#875BF7" color="#DDD6FE" />,
      data: [
        {
          date: "02/22/2024  16:24",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#EFF4FF",
        },
        {
          date: "02/22/2024  16:34",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#EFF4FF",
        },
        {
          date: "02/22/2024  16:44",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#EFF4FF",
        },
      ],
    },
    user2: {
      name: "@username",
      nameColor: "#000",
      userIcon: <User bg="#875BF7" color="#fff" />,
      icon: <PointIcon bg="#2970FF" color="#B2CCFF" />,
      data: [
        {
          date: "02/22/2024  16:30",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#F4F3FF",
        },
        {
          date: "02/22/2024  16:40",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#F4F3FF",
        },
        {
          date: "02/22/2024  16:50",
          dateColor: "#98A2B3",
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam. Lorem ipsum dolor sit amet sadipscing elitr.",
          infoColor: "#000",
          bg: "#F4F3FF",
        },
      ],
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
