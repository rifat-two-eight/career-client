import { use } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = use(AuthContext);
  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-10">
      <h2 className="text-center mb-5 text-3xl">
        Apply here for : <Link to={`/jobs/${jobId}`}>Details</Link>
      </h2>
      <form
        onSubmit={handleApplyForm}
        className="flex flex-col justify-self-center"
      >
        <label className="label">Linkedin Link</label>
        <input
          type="url"
          name="linkedin"
          className="input"
          placeholder="linkedin link"
        />

        {/* label of github */}

        <label className="label">Github Link</label>
        <input
          type="url"
          name="github"
          className="input"
          placeholder="github link"
        />

        <label className="label">Resume Link</label>
        <input
          type="url"
          name="resume"
          className="input"
          placeholder="resume link"
        />

        <input className="btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default JobApply;
