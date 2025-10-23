import React from "react";

interface FiltersProps {
  filters: {
    company: string;
    location: string;
    tag: string;
  };
  setFilters: (filters: FiltersProps["filters"]) => void;
  onApply: () => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters, onApply }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <input
        type="text"
        placeholder="Company"
        value={filters.company}
        onChange={(e) => setFilters({ ...filters, company: e.target.value })}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <input
        type="text"
        placeholder="Tag"
        value={filters.tag}
        onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <button
        onClick={onApply}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
