import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  ClosingScene,
  OpeningScene,
  ReloginWaveScene,
  SignInScene,
  WelcomeModalScene,
} from "../scenes/welcome-back";

export const WelcomeBackVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "var(--background)" }}>
      <Sequence from={0} durationInFrames={105}>
        <OpeningScene />
      </Sequence>
      <Sequence from={90} durationInFrames={135}>
        <SignInScene />
      </Sequence>
      <Sequence from={210} durationInFrames={165}>
        <WelcomeModalScene />
      </Sequence>
      <Sequence from={360} durationInFrames={195}>
        <ReloginWaveScene />
      </Sequence>
      <Sequence from={540} durationInFrames={60}>
        <ClosingScene />
      </Sequence>
    </AbsoluteFill>
  );
};
