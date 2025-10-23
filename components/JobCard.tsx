import React from "react";

export interface Job {
  jobId: string;
  title: string;
  company?: string;
  location?: string;
  tags?: string;
  description?: string;
  applyUrl: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">{job.title}</h2>
        {job.company && (
          <span className="text-sm text-gray-500">{job.company}</span>
        )}
      </div>

      {job.location && (
        <p className="text-sm text-gray-600 mb-2">{job.location}</p>
      )}

      {job.tags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {job.tags.split(",").map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm text-gray-700 mb-3">
        {job.description?.slice(0, 180) || "No description available."}
      </p>

      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
      >
        Apply
      </a>
    </div>
  );
};

export default JobCard;
