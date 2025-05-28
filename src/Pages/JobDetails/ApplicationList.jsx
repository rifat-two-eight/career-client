import React, { use } from "react";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);
  return (
    <div>
      <h2>List</h2>
    </div>
  );
};

export default ApplicationList;
