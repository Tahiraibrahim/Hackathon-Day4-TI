import React from 'react';

interface FilterPanelProps {
  onFilterChange: (filters: any) => void;
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ category: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ price: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="space-y-4">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range (per day)</label>
          <input
            type="range"
            min="0"
            max="10000"
            className="w-full mt-2"
            onChange={handlePriceChange}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹0</span>
            <span>₹10,000</span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Categories</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="tools">Tools</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;