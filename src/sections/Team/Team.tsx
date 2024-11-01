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
      "https://cdn.discordapp.com/avatars/546465300867055636/0414e42b4e10ffe1fec882804684960d.png?size=1024",
  },
  {
    name: "nottamali",
    role: "The Chaos Organizer",
    image:
     "https://res.cloudinary.com/dsrjjqkjs/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730484695/nottamali_hhbtes.png",
  },
  {
    name: "vesper",
    role: "The G.O.A.T",
    image:
      "https://res.cloudinary.com/dsrjjqkjs/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730484750/QmMoj2PJ_400x400_mka8fq.jpg",
  },
];
const Team: React.FC<TeamProps> = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-[rgb(10,10,10)] py-44">
      <div className="goldman text-white text-[3rem]">Meet the team</div>
      <div className="oswald text-white text-xl my-10 max-w-[700px] text-center font-semibold">
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
                    <p className="text-xl font-semibold leading-snug text-white">
                      {member.name}
                    </p>
                    <p className="text-white">{member.role}</p>
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
