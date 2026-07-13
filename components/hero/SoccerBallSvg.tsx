import Image from "next/image";
import soccerBall from "@/Soccer_ball_animated.svg.webp";

/** Uses the supplied football artwork instead of a custom-drawn approximation. */
export function SoccerBallSvg() {
  return <Image className="ball-svg" src={soccerBall} alt="Classic black and white soccer ball" priority sizes="(max-width: 760px) 100vw, 690px" />;
}
