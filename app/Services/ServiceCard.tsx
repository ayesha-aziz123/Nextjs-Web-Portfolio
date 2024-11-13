"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

// Type props
type props = {
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
      };
};

const ServiceCard = ({ service }:props) => {
  return (
    <Tilt className="shadow-2xl rounded-lg p-6 bg-blue-900">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
