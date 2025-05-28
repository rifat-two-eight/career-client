import React, { Suspense, use } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const MyApplications = () => {
  const { user } = use(AuthContext);

  const myApplicationsPromise = (email) => {
    return fetch(`http://localhost:3000/applications?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"loading your application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
