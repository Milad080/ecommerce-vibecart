import { Rabbit, Droplet, Wallet, Users } from "lucide-react";
import Image from "next/image";

const NeedOfWebsite = () => {
  const features = [
    {
      name: "Rabbit",
      icon: Rabbit,
      title: "CRUELTY FREE",
      description:
        "Compassion in every drop: Our promise of ethical, cruelty-free products.",
    },
    {
      name: "Droplet",
      icon: Droplet,
      title: "FRAGRANCE FORWARD",
      description: "Opulent and imported fragrance oils in each creation.",
    },
    {
      name: "Wallet",
      icon: Wallet,
      title: "AFFORDABLE LUXURY",
      description: "Compassion and promise ethical in each creation",
    },
    {
      name: "Users",
      icon: Users,
      title: "GENDER NEUTRAL",
      description: "Compassion and promise ethical in each creation",
    },
  ];
  return (
    <div className="container mx-auto px-4 mb-[20px] my-[10px]">
      <h2 className="heading text-center my-[40px]">WHY VIBECART</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={`/images/features/${feature.name}.png`}
              alt="_"
              height={100}
              width={100}
              className="sm:w-[50px] sm:h-[50px] mb-[20px]"
            />
            <h3 className="text-sm sm:text-lg mb-1 sm:mb-2 textGap text-gray-500">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm textGap text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedOfWebsite;
