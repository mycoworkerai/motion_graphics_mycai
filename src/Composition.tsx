import React from "react";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

export const MyComposition = () => {
  return (
    <Composition
      id="MycaiCardDemo"
      component={MinimalistMotionScene}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export const MinimalistMotionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Mola ultra-suave e fluida de entrada
  const enterSpring = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 20,
      stiffness: 75,
      mass: 0.9,
    },
  });

  const scale = interpolate(enterSpring, [0, 1], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(enterSpring, [0, 1], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(enterSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Movimento orgânico sutil de respiração (idle floating)
  const floatY = Math.sin((frame / fps) * 1.5) * 6;

  // 3. Revelação sequencial do conteúdo interno
  const itemSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const itemOpacity = interpolate(itemSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const itemTranslate = interpolate(itemSpring, [0, 1], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 4. Feixe de luz sutil percorrendo o fundo
  const lightPosition = interpolate(frame, [0, 180], [-200, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="dark bg-background text-foreground flex items-center justify-center overflow-hidden font-sans select-none">
      {/* Luz ambiente pontual e suave no centro */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.05 260 / 0.12) 0%, transparent 70%)",
          transform: `translate(${lightPosition * 0.4}px, ${floatY * 0.5}px)`,
          filter: "blur(90px)",
        }}
      />

      {/* Card Minimalista */}
      <div
        style={{
          opacity,
          scale,
          translate: `0px ${translateY + floatY}px`,
        }}
        className="relative z-10"
      >
        <Card className="w-[460px] rounded-3xl border border-border/60 bg-card/70 p-8 shadow-2xl backdrop-blur-3xl transition-all">
          {/* Header minimalista com pill e status silencioso */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/80 animate-pulse" />
              <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
                Mycai
              </span>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/30 px-2.5 py-0.5 text-[10px] text-muted-foreground">
              <Sparkles className="w-2.5 h-2.5" />
              <span>v2.0</span>
            </div>
          </div>

          {/* Área principal: espaço amplo e tipografia refinada */}
          <div
            style={{
              opacity: itemOpacity,
              translate: `0px ${itemTranslate}px`,
            }}
            className="my-10 space-y-2 text-center"
          >
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              Continuous Intelligence.
            </h1>
            <p className="text-xs font-normal tracking-wide text-muted-foreground/80">
              Workflows orchestrated with quiet precision.
            </p>
          </div>

          {/* Rodapé minimalista com botão interativo falso */}
          <div
            style={{
              opacity: itemOpacity,
            }}
            className="flex items-center justify-between border-t border-border/40 pt-4 text-[11px] text-muted-foreground"
          >
            <span className="font-mono text-[10px] text-muted-foreground/60">
              01 // 03
            </span>

            <div className="flex items-center gap-1.5 font-medium text-foreground hover:text-foreground/80 transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </Card>
      </div>
    </AbsoluteFill>
  );
};
