import React, { RefObject, useRef, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

interface GamesProps {}

const Games: React.FC<GamesProps> = ({}) => {
  const guRef = useRef<HTMLVideoElement>(null);
  const valRef = useRef<HTMLVideoElement>(null);
  const wagRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState<Record<string, boolean>>({});
  const handleMouseEnter = (ref: RefObject<HTMLVideoElement>, name: string) => {
    ref.current?.play();
    setHovered({
      ...hovered,
      [name]: true,
    });
  };

  const handleMouseLeave = (ref: RefObject<HTMLVideoElement>, name: string) => {
    ref.current?.pause();
    setHovered({
      ...hovered,
      [name]: false,
    });
  };

  return (
    <div className="relative h-full w-full bg-[rgba(10,10,10,1)] flex items-center justify-center flex-col pt-10 pb-28">
      <div className="goldman text-[4rem] text-white my-14">Games</div>
      <div className="flex items-center justify-center gap-x-5 w-[9object-scale-down max-h-full0%] mx-52">
        <div
          onMouseLeave={() => handleMouseLeave(guRef, "gu")}
          onMouseEnter={() => handleMouseEnter(guRef, "gu")}
          className="relative w-1/3 min-w-[400px] rounded flex-grow h-[800px]  skew-x-6 p-1 bg-gradient-to-r from-[#FA50A1] via-[#8481CF] to-[#409EE9] overflow-hidden "
        >
          <div className="absolute h-full w-full top-0 left-0 z-0 rounded">
            <VideoPlayer
              autoPlay={false}
              ref={guRef}
              url="/backgrounds/3.mp4"
            />
          </div>
          <div className="absolute z-0 h-full w-full bg-[rgba(10,10,10,0.65)] rounded" />
          <div
            className={`relative z-10 h-full w-full transition-all ease-in-out rounded duration-[300ms] ${hovered["gu"] && "bg-[rgba(10,10,10,0.8)]"} flex items-start justify-center p-10`}
          >
            <div className="goldman text-white text-3xl">Gods Unchained</div>
          </div>
        </div>
        <div
          onMouseLeave={() => handleMouseLeave(valRef, "val")}
          onMouseEnter={() => handleMouseEnter(valRef, "val")}
          className="relative w-1/3 min-w-[400px] rounded flex-grow h-[800px]  skew-x-6 p-1 bg-gradient-to-r from-[#FA50A1] via-[#8481CF] to-[#409EE9] overflow-hidden"
        >
          <div className="absolute h-full w-full top-0 left-0 z-0 rounded">
            <VideoPlayer
              autoPlay={false}
              ref={valRef}
              url="/backgrounds/7.mp4"
            />
          </div>
          <div className="absolute z-0 h-full w-full bg-[rgba(10,10,10,0.65)] rounded" />
          <div
            className={`relative z-10 h-full w-full transition-all ease-in-out rounded duration-[300ms] ${hovered["val"] && "bg-[rgba(10,10,10,0.8)]"} flex items-start justify-center p-10`}
          >
            <div className="goldman text-white text-3xl">Valeria</div>
          </div>
        </div>
        <div
          onMouseLeave={() => handleMouseLeave(wagRef, "wag")}
          onMouseEnter={() => handleMouseEnter(wagRef, "wag")}
          className="relative w-1/3 rounded min-w-[400px] flex-grow h-[800px]  skew-x-6 p-1 bg-gradient-to-r from-[#FA50A1] via-[#8481CF] to-[#409EE9] overflow-hidden"
        >
          <div className="absolute h-full w-full top-0 left-0 z-0 rounded">
            <VideoPlayer
              autoPlay={false}
              ref={wagRef}
              url="/backgrounds/11.mp4"
            />
          </div>
          <div className="absolute z-0 h-full w-full bg-[rgba(10,10,10,0.65)] rounded" />
          <div
            className={`relative z-10 h-full w-full transition-all ease-in-out rounded duration-[300ms] ${hovered["wag"] && "bg-[rgba(10,10,10,0.8)]"} flex items-start justify-center p-10`}
          >
            <div className="goldman text-white text-3xl">WAGMI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
