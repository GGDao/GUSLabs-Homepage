import React, { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Navbar from "../../components/Navbar/Navbar";
import { useSpring, useTrail, animated, easings } from "@react-spring/web";

interface HeroProps {}
const delay = 500;
const games = ["/gu_logo.png", "/valeria_logo.png", "/wagmi-logo.png"];

const Hero: React.FC<HeroProps> = () => {
  const urlNum = Math.floor(Math.random() * 11) + 1;

  const [leftAnimateProps, leftAnimateAPI] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: "translateX(-20%)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0%)",
      },
      delay,
      config: {
        easing: easings.easeInOutBounce,
      },
    }),
    []
  );

  const [topAnimateProps, topAnimateAPI] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(-20%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
      delay,
      config: {
        easing: easings.easeInOutBounce,
      },
    }),
    []
  );

  const [rightAnimateProps, rightAnimateAPI] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: "translateX(20%)",
      },
      to: {
        opacity: 1,
        transform: "translateX(0%)",
      },
      delay,
      config: {
        easing: easings.easeInOutBounce,
      },
    }),
    []
  );

  const [bottomAnimateProps, bottomAnimateAPI] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(20%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
      delay,
      config: {
        easing: easings.easeInOutBounce,
      },
    }),
    []
  );

  const trail = useTrail(games.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 700,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useEffect(() => {
    leftAnimateAPI.start();
    topAnimateAPI.start();
    rightAnimateAPI.start();
    bottomAnimateAPI.start();
  }, [leftAnimateAPI, topAnimateAPI, rightAnimateAPI, bottomAnimateAPI]);

  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 left-0 h-full w-full">
        <div className="relative z-0 h-full w-full">
          <VideoPlayer url={`/backgrounds/${urlNum}.mp4`} />
        </div>
      </div>
      <div className="absolute top-0 left-0 h-screen w-full blur-3xl bg-gradient-to-b from-[rgba(10,10,10,0.5)]  via-[rgba(10,10,10,0.75)] to-[rgb(10,10,10)]" />
      <div className="relative z-10 h-screen w-full top-0 bg-gradient-to-b from-[rgba(10,10,10,0.5)]  via-[rgba(10,10,10,0.75)] to-[rgb(10,10,10)]">
        <Navbar />
        <div className="flex flex-col items-center justify-center lg:space-y-3 mt-20">
          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(178,113,188,0.85))",
            }}
            className={`h-full w-full flex items-center justify-center uppercase oswald font-bold text-[4rem] xs:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] leading-[100%] text-white text-center m-auto"`}
          >
            <animated.div style={leftAnimateProps}>Raise</animated.div>
            &nbsp;
            <animated.div style={topAnimateProps}>the</animated.div>
            &nbsp;
            <animated.div style={rightAnimateProps}>stakes</animated.div>
          </div>
          <animated.div
            style={bottomAnimateProps}
            className="text-white goldman xl:text-2xl lg:text-lg md:text-base sm:text-sm text-center p-10 pt-5 hover:text-red-500"
          >
            Step into the arena. Stake your Coin. Domainate tournaments. Cement
            your legacy.
          </animated.div>
        </div>
        <div className="h-fit w-full flex items-center justify-center">
          {trail.map(({ height, ...style }, index) => {
            let width 
            if (games[index].startsWith("/valeria")) width = "w-[350px]"
            else width = "w-[200px]"
            return (
              <animated.div key={index} className="trails-text" style={style}>
              <img className={`${width} h-auto`} src={games[index]} />
              </animated.div>
            );
          })}
        </div>
        <animated.div style={bottomAnimateProps} className="relative h-fit w-full flex flex-col items-center justify-center mt-14">
          <div className="goldman text-[1.5rem] uppercase text-white">
            Games
          </div>
          <div className="text-[1.35em] text-white animate-bounce">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;
