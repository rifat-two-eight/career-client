import { Link } from "react-router";

const HotJobs = ({ job }) => {
  const { _id, company_logo, title, jobType } = job;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{jobType}</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <div>
            <Link to={`/jobs/${_id}`}>
              <button className="btn">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobs;
