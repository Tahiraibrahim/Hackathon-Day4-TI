"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allproducts } from "@/sanity/lib/queries";


type CarsType = {
  _id: string; 
  name: string;
  image?: any; 
  price?: number; 
};

const CarsList = () => {
  const [cars, setCars] = useState<CarsType[]>([]); // State initialized with CarsType array

  useEffect(() => {
    async function fetchCars() {
      try {
        const fetchedCars: CarsType[] = await client.fetch(allproducts); // Fetch products from Sanity
        setCars(fetchedCars); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchCars();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car._id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
            <div className="font-bold text-lg">{car.name}</div>
            {car.image && (
              <Image
                src={urlFor(car.image).url()} // Use Sanity's URL builder for images
                alt={car.name || "Car image"}
                width={200}
                height={200}
                className="rounded-md"
              />
            )}
            {car.price && <p className="text-gray-700 mt-2">Price: ₹{car.price}</p>}
          </div>
        ))
      ) : (
        <p>Loading cars...</p>
      )}
    </div>
  );
};

export default CarsList;
