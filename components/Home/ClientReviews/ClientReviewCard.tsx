import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ClientReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        id facilis sit quae expedita molestias tenetur animi possimus quo
        ratione repellendus libero, suscipit qui exercitationem, laboriosam
        ipsum doloremque, nulla vel. &quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-300">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
