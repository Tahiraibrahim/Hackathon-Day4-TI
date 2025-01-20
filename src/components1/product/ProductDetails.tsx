import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

interface ProductDetailsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  availabilityDate: string;
  owner: {
    name: string;
    rating: number;
  };
}

const ProductDetails = ({ title, description, price, image, availabilityDate, owner }: ProductDetailsProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600">{description}</p>

          <div className="border-t border-b py-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">₹{price}/day</span>
              <div className="text-sm text-gray-500">
                <p>Available from:</p>
                <p className="font-semibold">{new Date(availabilityDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Rental Period</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Start Date</label>
                <div className="mt-1 relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="pl-10 w-full border rounded-md"
                    min={availabilityDate}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">End Date</label>
                <div className="mt-1 relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="pl-10 w-full border rounded-md"
                    min={startDate}
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            Book Now
          </button>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">About the Owner</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="font-medium">{owner.name}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < owner.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;