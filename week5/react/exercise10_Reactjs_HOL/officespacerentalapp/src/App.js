import React from "react";
import "./App.css";
import officeImage from "./office.jpg";

function App() {

  const office = {
    name: "Sky Tower Office",
    rent: 55000,
    address: "Hyderabad"
  };

  const officeList = [

    {
      name: "Sky Tower Office",
      rent: 55000,
      address: "Hyderabad"
    },

    {
      name: "Tech Park",
      rent: 70000,
      address: "Bangalore"
    },

    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai"
    },

    {
      name: "Corporate Plaza",
      rent: 85000,
      address: "Pune"
    }

  ];

  return (

    <div className="container">

      <h1>Office Space Rental App</h1>

      <img src={officeImage} alt="Office Space" />

      <h2>Featured Office</h2>

      <div className="office">

        <h3>Name : {office.name}</h3>

        <h3 className={office.rent < 60000 ? "red" : "green"}>
          Rent : ₹{office.rent}
        </h3>

        <h3>Address : {office.address}</h3>

      </div>

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (

          <div className="office" key={index}>

            <h3>Name : {item.name}</h3>

            <h3 className={item.rent < 60000 ? "red" : "green"}>
              Rent : ₹{item.rent}
            </h3>

            <h3>Address : {item.address}</h3>

          </div>

        ))
      }

    </div>

  );
}

export default App;