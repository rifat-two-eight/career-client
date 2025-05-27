import { Link, useLoaderData } from "react-router";

const Details = () => {
  const job = useLoaderData();
  const { _id } = job;
  return (
    <div>
      <h2>Details of {job.title}</h2>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn">Apply</button>
      </Link>
    </div>
  );
};

export default Details;
