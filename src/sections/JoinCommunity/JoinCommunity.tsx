import React from "react";

interface JoinCommunityProps {}

const JoinCommunity: React.FC<JoinCommunityProps> = () => {
  return (
    <div className="flex flex-col relative items-center justify-center bg-[rgb(10,10,10)] space-y-20  w-full pb-28">
      <div className="goldman text-white text-[4rem]">
        <h1 className="font-black text-xl text-center max-w-[1300px] md:text-5xl pts !leading-[34px] md:!leading-[60px] tracking-wide">
          Connect, compete, and celebrate with fellow gamers. Be part of a
          vibrant{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            community
          </span>{" "}
          where everyone wins.
        </h1>
      </div>
      <div className="py-5 !mb-20  mx-auto text-center flex flex-col gap-5  bg-gradient-to-r from-[#5c258d] to-[#4389a2]  rounded-2xl w-1/2 h-fit">
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left xl:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl oswald font-bold tracking-wide text-white sm:text-4xl md:text-5xl text-left">
              Join Our Community
            </h2>
            <p className="mx-auto lato max-w-[700px] text-muted-foreground text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left text-gray-400">
              Connect with fellow esports enthusiasts and stay up-to-date on the
              latest news, tournaments, and more.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-5">
            <a href="#" className="group flex flex-col items-center justify-center">
              <img src="/icons/social/neon/discord.png" />
              <span className="oswald font-bold text-gray-200">Discord</span>
            </a>
            <a href="#" className="group flex flex-col items-center justify-center">
              <img src="/icons/social/neon/x.png" />
              <span className="oswald font-bold text-gray-200">X</span>
            </a>
            <a href="#" className="group flex flex-col items-center justify-center">
              <img src="/icons/social/neon/twitch.png" />
              <span className="oswald font-bold text-gray-200">Twitch</span>
            </a>
            <a href="#" className="group flex flex-col items-center justify-center">
              <img src="/icons/social/neon/medium.png" />
              <span className="oswald font-bold text-gray-200">Medium</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
