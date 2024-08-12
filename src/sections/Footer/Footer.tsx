import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className=" relative flex flex-col space-y-10 justify-center p-10 bg-[rgb(10,10,10)]">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">
          Home
        </a>
        <a className="hover:text-gray-900" href="#">
          Docs
        </a>
        <a className="hover:text-gray-900" href="#">
          About Immutable
        </a>
        <a className="hover:text-gray-900" href="#">
          Contact Us
        </a>
      </nav>
      <div className="flex justify-center space-x-5">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            className="h-[25px] w-[25px]"
            src="/icons/social/regular/discord.png"
            alt="Twitter"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            className="h-[25px] w-[25px]"
            src="/icons/social/regular/x.png"
            alt="Twitter"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            className="h-[25px] w-[25px]"
            src="/icons/social/regular/twitch.png"
            alt="Twitter"
          />
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2022 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
