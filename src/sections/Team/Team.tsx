import React from "react";

interface TeamProps {}

const teamMemberData: Array<{
  name: string;
  role: string;
  image: string;
}> = [
  {
    name: "Saltorious",
    role: "code monkey",
    image:"https://sessionize.com/image/213f-400o400o2-3qZUW9uoA7A734iEcKzsMz.jpg"
  },
  {
    name: "D0$H",
    role: "deal maker",
    image:"https://yt3.googleusercontent.com/ytc/AIdro_mYVb5hqxLtWxsiOHHu2RxYe3A4Gp_IgpLAsk7q2T2oIQI=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "sewlie",
    role: "visual wizard",
    image:"https://pbs.twimg.com/profile_images/1696222382917025793/VbVB8DkU_400x400.jpg"
  },
  {
    name: "nottamali",
    role: "chaos organizer",
    image:"https://pbs.twimg.com/profile_images/1475876245938348033/cF-C5EBS_400x400.jpg"
  },
  {
    name: "vesper",
    role: "G.O.A.T",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwNH4Ch0iV5GbcycFuso8r4igYeM96TK4Q&s"
  },
]
const Team: React.FC<TeamProps> = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-[rgb(10,10,10)] py-44">
      <div className="goldman text-white text-[3rem]">Meet the team</div>
      <div className="lato text-white text-xl my-10">
        GUSLabs is a community grown project with many contributors from the web3 gaming space. But these few individuals make the magic happen
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {
          teamMemberData.map((member) => {
            return (
            <div className="relative flex flex-col items-center justify-center">
                <img src={member.image} className="h-[150px] w-[150px] my-4" />
                <div className="lato text-white text-lg uppercase">
                  {member.name}
                </div>
                <div className="lato text-white text-base">
                  {member.role}
                </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Team;
