import React from "react";
import { Fade } from "react-awesome-reveal";

interface TeamProps {}

const teamMemberData: Array<{
  name: string;
  role: string;
  image: string;
}> = [
  {
    name: "Saltorious",
    role: "The Code Monkey",
    image:
      "https://sessionize.com/image/213f-400o400o2-3qZUW9uoA7A734iEcKzsMz.jpg",
  },
  {
    name: "D0$H",
    role: "The Friendly Enforcer",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mYVb5hqxLtWxsiOHHu2RxYe3A4Gp_IgpLAsk7q2T2oIQI=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "sewlie",
    role: "The Hype Coordinator",
    image:
      "https://cdn.discordapp.com/attachments/1041123325834956821/1278417526144897075/IMG_1273.jpg?ex=66e32f9a&is=66e1de1a&hm=49814bb47b98ab959ea3c67f2d8c6226685d14b6729efb065209edb7523fb1bc&",
  },
  {
    name: "nottamali",
    role: "The Chaos Organizer",
    image:
      "https://cdn.discordapp.com/attachments/1041123325834956821/1278418165604290608/Untitled_Artwork.jpg?ex=66e33032&is=66e1deb2&hm=10b81dfe9696cd35b11c8d1c4a2cef4cd676ceddaf16a6dc60de0ed7802a1981&",
  },
  {
    name: "vesper",
    role: "The G.O.A.T",
    image:
      "https://cdn.discordapp.com/avatars/617341181323640852/f6708d82a73e1b666e873596f11cb138.png?size=1024",
  },
];
const Team: React.FC<TeamProps> = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-[rgb(10,10,10)] py-44">
      <div className="goldman text-white text-[3rem]">Meet the team</div>
      <div className="roboto text-white text-xl my-10 max-w-[700px] text-center font-semibold">
        GUSLabs is a community grown project with many contributors from the
        web3 gaming space. But these few individuals make the magic happen
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 max-w-[1200px]">
        <Fade cascade damping={0.2}>
          {teamMemberData.map((member) => {
            return (
              <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    src={member.image}
                  />
                  <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-snug">
                      {member.name}
                    </p>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default Team;
