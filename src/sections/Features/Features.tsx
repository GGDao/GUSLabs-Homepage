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
        <div className="md:w-2/3 lg:w-1/2">
          <Fade cascade damping={0.3}>
            <span className="text-[2rem]">🎮 ⚔️ 🏆</span>
            <h2 className="goldman my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Jump In and Play for Keeps
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-2xl font-light oswald ">
              Challenge your friends, stake your tokens, and win awesome
              rewards—all while playing the games you love. Dive in, have fun,
              and see just how far your skills can take you!
            </p>
          </Fade>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <Fade cascade damping={0.2}>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 h-[22.5rem]">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/icons/joystick.png"
                  className="w-12"
                  width="1024"
                  height="1024"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-grey-700 transition roboto group-hover:text-secondary">
                    Play Your Way
                  </h5>
                  <p className="text-gray-600 lato text-base">
                    Pick your game, join a match, and stake your tokens. It’s
                    all about playing what you love and scoring some wins.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 h-[22.5rem]">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/icons/knight.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition roboto group-hover:text-secondary">
                    Battle Ready
                  </h5>
                  <p className="text-gray-600 lato text-base">
                    Bring your A-game and face off against other gamers. Quick
                    matches, big rewards—let’s see who’s got what it takes.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 h-[22.5rem]">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/icons/shield.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                    Secure and Fair
                  </h5>
                  <p className="text-gray-600 lato text-base mb-48">
                    We’ve got your back with top-notch security and a level
                    playing field. Every match is fair, so you can focus on what
                    really matters: winning.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 h-[22.5rem]">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="/icons/prize.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white  transition group-hover:text-secondary">
                    Win Big
                  </h5>
                  <p className="text-white lato text-base">
                    Win matches, earn rewards. From unique NFTs to crypto
                    prizes, every victory brings you valuable rewards.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Features;
