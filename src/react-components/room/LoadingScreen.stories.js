import React from "react";
import { LoadingScreen } from "./LoadingScreen";

export default {
  title: "Room/LoadingScreen",
  parameters: {
    layout: "fullscreen"
  }
};

const infoMessages = [
  { heading: "Tip:", message: "Press the Q & E keys to turn left and right." },
  {
    heading: "Working to create a great metaverse",
    message: (
      <>
        You can now set the default language in your preferences.{" "}
        <a href="#" target="_blank">
          Read More
        </a>
      </>
    )
  }
];

export const Base = () => <LoadingScreen message="Loading land please wait 2/14" infoMessages={infoMessages} />;
