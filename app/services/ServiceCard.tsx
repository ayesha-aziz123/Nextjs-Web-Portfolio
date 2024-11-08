"use client";
import React from "react";
import Image from "next/image";

// Define the props Type

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: any;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <div  className="p-6 shadow-2xl rounded-lg bg-[#2f2f2f] ">
      <Image src={service.icon} alt={service.title} height={60} width={60} />
      <h1 className="font-bold text-gray-100 mt-4 text-xl">{service.title}</h1>
      <p className="text-white text-sm mt-3 opacity-80">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
