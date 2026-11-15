import React from "react";
import { Composition } from "remotion";
import { WelcomeBackVideo } from "./welcome-back";

export const RegisteredCompositions: React.FC = () => (
  <Composition
    id="my-coworker-welcome-back"
    component={WelcomeBackVideo}
    durationInFrames={600}
    fps={30}
    width={1080}
    height={1920}
  />
);
