"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Power Tools", image: "/k1.webp" },
  { name: "Hand Tools", image: "/k2.webp" },
  { name: "Safety Equipment", image: "/k3.webp" },
  { name: "Electrical Supplies", image: "/k4.webp" },
  { name: "Plumbing Tools", image: "/k5.webp" },
  { name: "Measuring Tools", image: "/k6.webp" },
];

export default function TopCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 max-w-7xl mx-auto">
        <span className="w-full pb-12 flex flex-col justify-center items-center">
          <h1 className=" md:text-5xl font-bold text-black">
            Product Categories
          </h1>
          <div className="bg-[var(--maincolor)] w-44 h-1 rounded-full mt-2"></div>
        </span>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Banner Image */}
          <div className="lg:w-1/3">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/k1.webp"
                alt="Category Banner"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-white text-3xl font-bold mb-2">
                  Explore Our Categories
                </h2>
                <p className="text-white text-lg mb-4">
                  Find the perfect tools for your project
                </p>
                <Link
                  href="/products"
                  className="bg-[var(--maincolor)] text-white px-6 py-2 rounded-lg hover:bg-[var(--maincolor)]/90 transition-colors inline-block text-center"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Link href="/product" key={index} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {category.name}
                      </h3>
                      <p className="text-[var(--maincolor)] text-sm mt-1">
                        View Products
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
