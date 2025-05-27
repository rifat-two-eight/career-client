import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { useLoaderData } from "react-router";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center font-semibold text-2xl">
        Hot Jobs of Recent Days
      </h2>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <HotJobs job={job} key={job._id}></HotJobs>
        ))}
      </div>
    </div>
  );
};

export default Home;
