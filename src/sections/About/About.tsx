import React, { useEffect } from "react";
import { useInView, useSpring, animated, easings } from "@react-spring/web";

interface AboutProps {}

const aboutData: Array<{
  content: string;
  icon: string;
}> = [
  {
    icon: "fa-solid fa-money-bill-wave",
    content:
      "Stake your tokens on 1v1 matches. Play for in game assets. Rise to the top of the leaderboard and as the highest roller. ",
  },
  {
    icon: "fa-solid fa-gamepad",
    content:
      "Participate in tournaments. Claim your winnings instantly. Dominate the competiion, and become a champion. All matches verified.",
  },
  {
    icon: "fa-solid fa-award",
    content: "Earn points, enter raffles for in game assets. win shit biiihhh",
  },
];

const delay = 800;
const About: React.FC<AboutProps> = () => {
  const [leftRef, leftinView] = useInView()
  const [rightRef, rightinView] = useInView()
  const [leftProps, leftApi] = useSpring(() => ({
      from: {
        opacity: 0,
        transform: "translateX(-20%)",
      },
      to: {
        opacity: 0.5,
        transform: "translateX(0%)",
      },
      delay,
      config: {
         duration: 5000
      },
  }), []);

  const [rightProps, rightApi] = useSpring(() => ({
      from: {
        opacity: 0,
        transform: "translateX(20%)",
      },
      to: {
        opacity: 0.75,
        transform: "translateX(0%)",
      },
      delay,
      config: {
        duration:5000
      },
  }), []);

  useEffect(() => {
    if (leftinView) leftApi.start()
    if (rightinView) rightApi.start()
  }, [leftinView, rightinView])
  

  return (
    <div className="relative h-full w-full bg-[rgb(10,10,10)] flex flex-col items-center justify-center pt-28 pb-60 space-y-20">
      <animated.div
        ref={leftRef}
        style={leftProps}
        className="absolute bg-accent -left-44 top-44 z-0 h-[300px] w-[400px] rounded-[100%]  blur-[5rem]"
      />

      <animated.div
        ref={rightRef}
        style={rightProps}
        className="absolute bg-accent -right-44 bottom-40 z-0 h-[150px] w-[400px] rounded-[100%] blur-[5rem]"
      />
      <div className="goldman text-white text-[2.5rem] tracking-wide uppercase">
        About Guslabs
      </div>
      <div className="relative z-10 flex items-start justify-center space-x-20">
        {aboutData.map((d, index) => {
          let iconColor;
          switch (index) {
            case 0:
              iconColor = "text-[rgb(252,81,160)]";
              break;
            case 1:
              iconColor = "text-[rgb(135,131,206)]";
              break;
            case 2:
              iconColor = "text-[rgb(63,158,234)]";
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center max-w-[25%]"
            >
              <span className={`text-[5em] ${iconColor}`}>
                <i className={d.icon}></i>
              </span>
              <div className="lato font-light text-[1.5rem] text-white">
                {d.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
