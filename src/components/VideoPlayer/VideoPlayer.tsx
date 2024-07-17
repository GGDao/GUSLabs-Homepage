import { forwardRef } from "react";

interface VideoPlayerProps {
  url: string;
  loop?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({
  url,
  loop = true,
  autoPlay = true,
  muted = true,
}, ref) => {
  return (
    <div className="h-screen w-full relative">
      <video
        ref={ref}
        style={{
          filter: "blur(3px)",
          objectFit: "cover"
        }}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        className="h-full w-full "
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}) 


export default VideoPlayer;
