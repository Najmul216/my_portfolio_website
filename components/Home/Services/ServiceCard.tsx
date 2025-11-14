import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div>
      <Image src={icon} alt="img" width={60} height={60} />
      <h1 className="mt-3 text-xl md:text-xl font-bold text-green-200">
        {name}
      </h1>
      <p className="mt-2 text-gray-200">{description}</p>
    </div>
  );
};

export default ServiceCard;
