import { clientReviews } from "@/Data/data";
import Image from "next/image";
import { title } from "process";
import { FaStar } from "react-icons/fa";

// props type
type props = {
  reviews: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ reviews }: props) => {
  const { name, image, profession, rating, review } = reviews;

  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
      <div className="p-6 ">
        <Image src="/q.jpg" alt="image" width={50} height={50} />
        <p className="text-white text-opacity-70">{review}</p>
        <Image
          src="/q.jpg"
          alt="image"
          className="ml-auto"
          width={50}
          height={50}
        />
      </div>
      
      <div
        className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900
    text-white font-bold"
      >
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="bg-gray-100">
        <div className="p-6 flex items-center space-x-6">
            <div>
                <Image src={image} alt={name} width={40} height={40} className="rounded-full"/>
            </div>
            <div>
                <h1 className="text-">{name}</h1>
                <p>{profession}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
