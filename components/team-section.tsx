"use client";
import Image from "next/image";

interface TeamMember {
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. B",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742050899/Mr._B_wa1rvv.png",
  },
  {
    name: "Mr. D",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742051109/Mr._D_bqyxpj.png",
  },
  {
    name: "Mr. I",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742051344/Mr._I_r0b2hp.png",
  },
  {
    name: "Mr. M",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742051552/Mr._M_dm6ftt.png",
  },
  {
    name: "Mr. N",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742051624/Mr._N_n4jpx0.png",
  },
  {
    name: "Mr. X",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742051623/Mr._X_kgmwvi.png",
  },
  {
    name: "Mr. Z",
    image:
      "https://res.cloudinary.com/dz4dypxxb/image/upload/v1742050681/Mr._Z_e2mhao.png",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
      <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-950">
          Our Team
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-blue-950">
          Meet the amazing people behind CatsPlay
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-amber-100 relative rounded-2xl border border-[#9e782c] shadow-[2px_2px_0_#9e782c] overflow-hidden size-[140px] md:size-[160px] lg:size-[180px] mb-3 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}`}
                  fill
                  className="object-cover"
                  draggable={false}
                  unoptimized
                />
              </div>
              <h4 className="font-bold text-lg text-blue-950">{member.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
