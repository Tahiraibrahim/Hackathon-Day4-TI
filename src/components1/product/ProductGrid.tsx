import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">{product.name}</h4>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-lg font-bold">₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;