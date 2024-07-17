import React from "react";

interface JoinCommunityProps {}

const JoinCommunity: React.FC<JoinCommunityProps> = () => {
  return (
    <div className="flex flex-col relative items-center justify-center bg-[rgb(10,10,10)] space-y-5 pb-20 py-28">
      <div className="goldman text-white text-[4rem]">
        Join the community
      </div>
      <div className="clip-path relative h-[400px] w-[900px] bg-red-500">
      </div>
    </div>
  );
};

export default JoinCommunity;
