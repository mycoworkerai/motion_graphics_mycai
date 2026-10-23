import React from "react";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Bot,
  ArrowUpRight,
  Activity,
  ShieldCheck,
} from "lucide-react";

export const MyComposition = () => {
  return (
    <Composition
      id="MycaiCardDemo"
      component={MycaiMotionScene}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export const MycaiMotionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Mola de entrada principal do Card
  const cardSpring = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 14,
      stiffness: 90,
      mass: 0.8,
    },
  });

  const cardScale = interpolate(cardSpring, [0, 1], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cardTranslateY = interpolate(cardSpring, [0, 1], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Mola de revelação do conteúdo interno (staggered)
  const contentSpring = spring({
    frame: frame - 28,
    fps,
    config: { damping: 15, stiffness: 100 },
  });
  const contentOpacity = interpolate(contentSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const contentTranslateY = interpolate(contentSpring, [0, 1], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Barra de progresso animada
  const progress = interpolate(frame, [45, 110], [0, 88.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 4. Luz de fundo flutuante sutil
  const ambientGlow = interpolate(
    Math.sin((frame / fps) * 2),
    [-1, 1],
    [0.35, 0.65],
  );

  return (
    <AbsoluteFill className="dark bg-background text-foreground flex items-center justify-center overflow-hidden font-sans select-none">
      {/* Background decorativo com grid moderno e gradiente */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow dinâmico atrás do Card */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.5 0.1 260 / 0.25) 0%, transparent 70%)",
          opacity: ambientGlow,
          transform: `scale(${interpolate(cardSpring, [0, 1], [0.6, 1])})`,
        }}
      />

      {/* Card do Shadcn Animado */}
      <div
        style={{
          opacity: cardOpacity,
          scale: cardScale,
          translate: `0px ${cardTranslateY}px`,
        }}
        className="relative z-10"
      >
        <Card className="w-[520px] rounded-2xl border-border/80 bg-card/90 shadow-2xl backdrop-blur-2xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground bg-muted/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Mycai Agent Core</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Mycai Workspace
                </CardTitle>
                <CardDescription className="text-sm">
                  Orquestração autônoma e fluxos em tempo real
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent
            style={{
              opacity: contentOpacity,
              translate: `0px ${contentTranslateY}px`,
            }}
            className="flex flex-col gap-5"
          >
            {/* Box de métricas */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Velocidade de Resposta</span>
                  <Activity className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="text-2xl font-semibold tracking-tight">
                  140ms
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-3.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Precisão de Execução</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-semibold tracking-tight text-emerald-400">
                  99.8%
                </div>
              </div>
            </div>

            {/* Barra de progresso procedural */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Processamento de Contexto
                </span>
                <span className="tabular-nums font-mono text-foreground">
                  {progress.toFixed(1)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-none rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
            <span>Graphite Dark Theme • Shadcn UI</span>
            <span className="font-mono">FPS: 30 / 1080p</span>
          </CardFooter>
        </Card>
      </div>
    </AbsoluteFill>
  );
};
