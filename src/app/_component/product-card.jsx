import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ title, price, image, href, tag }) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative h-full flex flex-col">
        <div className="absolute -left-8 top-4 rotate-[-45deg] bg-orange-500 text-white px-10 py-1 shadow-lg z-10">
          <span className="text-sm font-semibold">{tag || "New"}</span>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            alt={title}
            width={300}
            height={300}
            src={image}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-sm lg:text-base font-semibold text-black line-clamp-2 mb-2 flex-grow">
            {title}
          </h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
            <span className="text-orange-500 font-bold text-base">
              ₹{price}
            </span>
            <span className="flex items-center text-black text-sm group-hover:text-orange-500 transition-colors">
              View Details
              <ExternalLink className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
