"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/Api";
import { Loader2Icon, ExternalLink } from "lucide-react";
import Wrapper from "./Wrapper";

export default function NewProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const featuredProducts = data.slice(0, 4);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await fetchProducts();
      setData(productData);
      setLoading(false);
    };
    fetchProductData();
  }, []);

  return (
    <section className="w-full bg-gray-100 py-12 ">
      <Wrapper className="py-10">
        <div className="w-full pb-12 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            New Arrivals
          </h1>
          <span className="bg-orange-500 w-44 h-1 rounded-full mt-4"></span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center w-full h-64">
            <Loader2Icon className="h-12 w-12 animate-spin text-orange-500" />
            <span className="ml-4 text-xl font-medium text-black">
              Loading...
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((item, index) => (
              <Link
                href={`/product/${item.title}`}
                key={index}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative h-full flex flex-col">
                  <div className="absolute -left-8 top-4 rotate-[-45deg] bg-orange-500 text-white px-10 py-1 shadow-lg z-10">
                    <span className="text-sm font-semibold">NEW</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <Image
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      alt={item.title}
                      width={300}
                      height={300}
                      src={item.image}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold text-black line-clamp-2 mb-4 flex-grow">
                      {item.title}
                    </h2>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-orange-500 font-bold">
                        ₹{item.price}
                      </span>
                      <span className="flex items-center text-black group-hover:text-orange-500 transition-colors">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Wrapper>
    </section>
  );
}
