import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 rounded-md px-3 py-2"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
