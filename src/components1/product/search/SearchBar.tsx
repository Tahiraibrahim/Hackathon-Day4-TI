import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Trigger the parent's `onSearch` function on every input change
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        placeholder="Search for products..."
      />
    </div>
  );
};

export default SearchBar;
