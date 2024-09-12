import React, { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Navbar from "../../components/Navbar/Navbar";
import { useSpring, useTrail, animated, easings } from "@react-spring/web";

interface HeroProps {}
const delay = 500;
const games = [
  {
    img: "/gu_logo.png",
    link: "https://godsunchained.com/",
  },
];

const Hero: React.FC<HeroProps> = () => {
  const urlNum = Math.floor(Math.random() * 4) + 1;

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
    <div className="h-screen w-screen border-[1px] border-solid border-[rgb(10,10,10)] relative">
      <div className="fixed top-0 left-0 h-full w-full ">
        <div className="relative z-0 h-full w-full">
          <VideoPlayer url={`/backgrounds/${urlNum}.mp4`} />
        </div>
      </div>
      <div className="absolute top-0 left-0 h-screen w-full blur-3xl bg-gradient-to-b from-[rgba(10,10,10,0.5)]  via-[rgba(10,10,10,0.75)] to-[rgb(10,10,10)]" />
      <div className="z-10 h-screen absolute w-full bg-gradient-to-b from-[rgba(10,10,10,0.5)]  via-[rgba(10,10,10,0.75)] to-[rgb(10,10,10)]">
        <Navbar />
        <div className="flex flex-col items-center justify-center lg:space-y-3 mt-5 md:mt-28">
          <div
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(178,113,188,0.85))",
            }}
            className={`h-full w-full flex items-center justify-center uppercase oswald font-bold text-[2.5rem] xs:text-[2rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] leading-[100%] text-white text-center m-auto"`}
          >
            <animated.div style={leftAnimateProps}>Raise</animated.div>
            &nbsp;
            <animated.div style={topAnimateProps}>the</animated.div>
            &nbsp;
            <animated.div style={rightAnimateProps}>stakes</animated.div>
          </div>
          <animated.div
            style={bottomAnimateProps}
            className="text-white goldman xl:text-2xl lg:text-lg md:text-[1.75rem] sm:text-[2rem] text-center p-10 pt-5 hover:text-red-500"
          >
            Step into the arena. Stake your Coin. Domainate tournaments. Cement
            your legacy.
          </animated.div>
          <animated.div
            style={bottomAnimateProps}
            className="mb-5 mt-0 md:mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <a
              href="https://tournaments.gustakes.gg"
              className="rounded-md goldman bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Enter a Tournament
            </a>
            <a
              href="https://docs.gustakes.gg"
              target="_blank"
              className="text-sm goldman font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </animated.div>
        </div>
        <div className="h-fit w-full flex items-center justify-center mt-0 md:mt-60 lg:mt-20">
          {trail.map(({ height, ...style }, index) => {
            let width;
            if (games[index].img.startsWith("/valeria")) width = "w-[350px]";
            else width = "w-[100px] md:w-[200px]";
            return (
              <animated.div key={index} className="trails-text" style={style}>
                <a
                  href={games[index].link}
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <img className={`${width} h-auto`} src={games[index].img} />
                </a>
              </animated.div>
            );
          })}
        </div>
        <animated.div
          style={bottomAnimateProps}
          className="relative h-fit w-full flex flex-col items-center justify-center mt-14"
        >
          <div className="goldman text-[1.5rem] uppercase text-white">
            Explore
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
