import React from "react";
import { Fade } from "react-awesome-reveal";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div
      id="features"
      className="relative pt-0 lg:pt-20  h-full w-full bg-[rgba(10,10,10,1)] flex items-center justify-center flex-col pt-10 pb-28 border-[1px] border-solid border-[rgb(10,10,10)]"
    >
      <div className="absolute top-0 left-0 h-screen w-full blur-3xl bg-gradient-to-b from-[rgba(10,10,10,0.5)]  via-[rgba(10,10,10,0.75)] to-[rgb(10,10,10)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 relative">
          <Fade cascade damping={0.05}>
            <img
              src="/icons/prize.png"
              className="absolute -top-8 -left-8 w-64 h-64 opacity-20 pointer-events-none"
              width="512"
              height="512"
              alt="prize background"
            />
            <div className="relative z-10 pl-32">
              <h2 className="gus-font-header my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                Jump In and Play for Keeps
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-2xl font-bold gus-font-body">
                Challenge your friends, stake your tokens, and win awesome
                rewards—all while playing the games you love. Dive in, have fun,
                and see just how far your skills can take you!
              </p>
            </div>
          </Fade>
        </div>

        {/* Play Your Way - Right Aligned */}
        <div className="mt-16 flex justify-end">
          <div className="md:w-2/3 lg:w-1/2 text-right relative">
            <Fade cascade damping={0.05}>
              <img
                src="/icons/joystick.png"
                className="absolute -top-8 -right-16 w-64 h-64 opacity-20 pointer-events-none"
                width="1024"
                height="1024"
                alt="joystick background"
              />
              <div className="relative z-10 pr-32">
                <h3 className="gus-font-header text-2xl font-bold text-gray-700 dark:text-white md:text-4xl mb-4">
                  Play Your Way
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xl font-bold gus-font-body">
                  Pick your game, join a match, and stake your tokens. It's
                  all about playing what you love and scoring some wins.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Battle Ready - Left Aligned */}
        <div className="mt-16">
          <div className="md:w-2/3 lg:w-1/2 relative">
            <Fade cascade damping={0.05}>
              <img
                src="/icons/knight.png"
                className="absolute -top-8 -left-16 w-64 h-64 opacity-20 pointer-events-none"
                width="512"
                height="512"
                alt="knight background"
              />
              <div className="relative z-10 pl-32">
                <h3 className="gus-font-header text-2xl font-bold text-gray-700 dark:text-white md:text-4xl mb-4">
                  Battle Ready
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xl font-bold gus-font-body">
                  Bring your A-game and face off against other gamers. Quick
                  matches, big rewards—let's see who's got what it takes.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Secure and Fair - Right Aligned */}
        <div className="mt-16 flex justify-end">
          <div className="md:w-2/3 lg:w-1/2 text-right relative">
            <Fade cascade damping={0.05}>
              <img
                src="/icons/shield.png"
                className="absolute -top-8 -right-16 w-64 h-64 opacity-20 pointer-events-none"
                width="512"
                height="512"
                alt="shield background"
              />
              <div className="relative z-10 pr-32">
                <h3 className="gus-font-header text-2xl font-bold text-gray-700 dark:text-white md:text-4xl mb-4">
                  Secure and Fair
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xl font-bold gus-font-body">
                  We've got your back with top-notch security and a level
                  playing field. Every match is fair, so you can focus on what
                  really matters: winning.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Win Big - Left Aligned */}
        <div className="mt-16">
          <div className="md:w-2/3 lg:w-1/2 relative">
            <Fade cascade damping={0.05}>
              <img
                src="/icons/money.png"
                className="absolute -top-8 -left w-64 h-64 opacity-20 pointer-events-none"
                width="512"
                height="512"
                alt="money background"
              />
              <div className="relative z-10 pl-32">
                <h3 className="gus-font-header text-2xl font-bold text-gray-700 dark:text-white md:text-4xl mb-4">
                  Win Big
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xl font-bold gus-font-body">
                  Win matches, earn rewards. From unique NFTs to crypto
                  prizes, every victory brings you valuable rewards.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;