import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full h-fit px-10 py-6 flex items-center justify-between">
      <button>
        <div className="h-fit w-fit flex items-center justify-center">
          <img className="h-[100px] w-[100px]" src="/gus_logo_clear.png" />
          <div className="goldman text-[3rem] text-white shadow-lg text-[#4a4a4a] font-bold">
            GUSLabs
          </div>
        </div>
      </button>
      <div className="flex items-center justify-center gap-x-5 mr-32">
        <a href="https://x.com/gu_stakes" target="_blank" className="text-[1.35em] text-white">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href="https://discord.gg/gustakes" target="_blank" className="text-[1.35em] text-white">
          <i className="fa-brands fa-discord"></i>
        </a>

        <a href="https://www.twitch.tv/gu_stakes" target="_blank" className="text-[1.35em] text-white">
          <i className="fa-brands fa-twitch"></i>
        </a>

        <a href="https://gustakes.medium.com/" target="_blank" className="text-[1.3335em] text-white">
          <i className="fa-brands fa-medium"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
