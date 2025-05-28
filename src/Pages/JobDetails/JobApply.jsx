import { useParams } from "react-router";

const JobApply = () => {
  const { id: jobId } = useParams();
  return (
    <div className="my-10">
      <h2 className="text-center mb-5 text-3xl">Apply here</h2>
      <form className="flex flex-col justify-self-center">
        <label className="label">Linkedin Link</label>
        <input type="url" className="input" placeholder="linkedin link" />

        <label className="label">Github Link</label>
        <input type="url" className="input" placeholder="github link" />

        <label className="label">Resume Link</label>
        <input type="url" className="input" placeholder="resume link" />

        <input className="btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default JobApply;
