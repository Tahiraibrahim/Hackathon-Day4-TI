import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  availabilityDate: string;
  rentalPeriod: string;
}

const ProductCard = ({ id, title, price, image, availabilityDate, rentalPeriod }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-xl font-bold text-primary">₹{price}/day</p>
            <span className="text-sm text-gray-500">{rentalPeriod}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Available from: {new Date(availabilityDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
