"use client";

import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { PiLightbulbFilament } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import Wrapper from "./Wrapper";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality",
      description: "We provide tools that exceed project standards.",
      icon: BsPatchCheck,
    },
    {
      title: "Innovation",
      description:
        "We continually integrate advanced technology into our products.",
      icon: PiLightbulbFilament,
    },
    {
      title: "Reliability",
      description:
        "We provide tools that are built to last and perform under all conditions.",
      icon: IoShieldCheckmarkOutline,
    },
    {
      title: "Customer Support",
      description:
        "We deliver unparalleled support and guidance to our clients",
      icon: RiCustomerService2Line,
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className=" md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="bg-orange-500 w-24 h-1 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/msn.webp"
              alt="Why choose KAAL TOOLS"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-orange-100 p-3 rounded-full">
                    <feature.icon className="text-orange-500 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
