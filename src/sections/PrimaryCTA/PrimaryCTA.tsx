import React from "react";
import { Fade } from "react-awesome-reveal";

interface PrimaryCTAProps {}

const PrimaryCTA: React.FC<PrimaryCTAProps> = () => {
  const handleGoToTournament = () => window.location.href = "https://app.gustakes.gg"
  const handleGoToLearnMore = () => window.open("https://docs.gustakes.gg")
  return (
    <div className="relative h-full w-full bg-[rgb(10,10,10)] pb-60">
      <Fade>
        <div className="relative mx-auto w-[80%] md:w-full max-w-5xl">
          <div
            className="rounded-xl p-1"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
            }}
          >
            <div className="rounded-lg bg-black/80 backdrop-blur">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
                <div className="lg:max-w-xl">
                  <h2 className="block w-full goldman pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    Hop in a tournament now!
                  </h2>
                  <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400 text-xl oswald">
                    Ready to jump in? Pick a tournament, take a chance, and see
                    where your skills can take you. Let’s play
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <button onClick={handleGoToTournament} className="bg-violet-600 lato text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">
                    Enter a tournament 
                  </button>
                  <button onClick={handleGoToLearnMore} className="flex items-center lato justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PrimaryCTA;
