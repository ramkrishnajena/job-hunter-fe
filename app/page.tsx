"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Job } from "@/components/JobCard";
import { Filters, JobCard, Pagination, SearchBar } from "@/components";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    company: "",
    location: "",
    tag: "",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchJobs() {
    try {
      setLoading(true);
      const params = {
        search,
        company: filters.company,
        location: filters.location,
        tag: filters.tag,
        page,
        limit: 10,
      };
      const { data } = await axios.get(`${API_URL}/jobs`, { params });
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [page]);

  async function handleCrawl() {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/crawl`);
      alert("Crawler started! Wait 30–60s and refresh.");
    } catch (err) {
      console.error("Crawler failed:", err);
      alert("Crawler failed to start. Check backend logs.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Remote Job Listings</h1>
      </div>

      <SearchBar value={search} onChange={setSearch} onSearch={fetchJobs} />
      <Filters filters={filters} setFilters={setFilters} onApply={fetchJobs} />

      {loading ? (
        <p className="text-center mt-10 text-gray-600">Loading...</p>
      ) : jobs.length ? (
        <>
          <div className="grid gap-4 mt-6">
            {jobs.map((job) => (
              <JobCard key={job.jobId} job={job} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <p className="text-center mt-10 text-gray-500">No jobs found.</p>
      )}
    </div>
  );
}
