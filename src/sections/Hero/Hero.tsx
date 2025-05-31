import React, { useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Navbar from "../../components/Navbar/Navbar";
import { useSpring, animated, easings } from "@react-spring/web";

interface HeroProps {}
const delay = 500;

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
      <div className="absolute top-0 left-0 h-screen w-full blur-3xl bg-gradient-to-b from-[rgba(10,10,10,0.3)]  via-[rgba(10,10,10,0.6)] to-[rgb(10,10,10)]" />
      <div className="z-10 h-screen absolute w-full bg-gradient-to-b from-[rgba(10,10,10,0.3)]  via-[rgba(10,10,10,0.6)] to-[rgb(10,10,10)]">
        <Navbar />
        <div className="flex flex-col items-center justify-center lg:space-y-3 mt-8 md:mt-28">
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
            className="text-white gus-font-header xl:text-xl lg:text-lg md:text-[1.75rem] sm:text-[2rem] text-center p-10 pt-5 hover:text-red-500"
          >
            Step into the Arena. Stake your Coin. Dominate the Opposition and Cement your Legacy.
          </animated.div>
          <animated.div
            style={bottomAnimateProps}
            className="mb-5 mt-5 md:mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
          <a
            href="https://app.gustakes.gg"
            className="rounded-2xl gus-font-header px-3.5 py-2.5 text-xl font-semibold text-yellow-900 shadow-lg hover:text-yellow-800 transition-all duration-200 animate-pulse
              bg-[linear-gradient(to_bottom,_#fef08a,_#ffffff_10%,_#facc15_50%,_#b45309)] [animation-duration:3s]"
          >
              Get Started Now!  
            </a>
          </animated.div>
        </div>
        {/* Non-clickable, transparent Gods Unchained logo - positioned to look like part of background */}
        <div className="absolute bottom-20 right-20 z-5 pointer-events-none fade-out-logo">
  <img className="w-[200px] md:w-[300px] h-auto opacity-10" src="/gu_logo.png" />
</div>
      </div>
    </div>
  );
};

export default Hero;