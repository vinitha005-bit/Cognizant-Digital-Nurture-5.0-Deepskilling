import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohorts = [

    {
      name: "INTADMDF10 .NET FSD",
      startDate: "22-Feb-2022",
      status: "ongoing",
      coach: "John",
      trainer: "David"
    },

    {
      name: "ADM21JF014 Java FSD",
      startDate: "10-Jan-2022",
      status: "completed",
      coach: "Peter",
      trainer: "James"
    },

    {
      name: "INTADMDF11 React",
      startDate: "05-Mar-2022",
      status: "ongoing",
      coach: "Alice",
      trainer: "Robert"
    },

    {
      name: "INTADMDF09 Java",
      startDate: "15-Dec-2021",
      status: "completed",
      coach: "Michael",
      trainer: "Steve"
    }

  ];

  return (

    <div>

      <h1>Cognizant Academy Dashboard</h1>

      {

        cohorts.map((item, index) => (

          <CohortDetails
            key={index}
            cohort={item}
          />

        ))

      }

    </div>

  );

}

export default App;