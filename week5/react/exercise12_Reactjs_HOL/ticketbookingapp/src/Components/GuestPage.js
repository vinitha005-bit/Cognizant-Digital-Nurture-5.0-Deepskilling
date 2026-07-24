import React from "react";

function GuestPage() {
  const flights = [
    {
      id: 1,
      flight: "AI101",
      from: "Hyderabad",
      to: "Delhi",
      fare: 5500,
    },
    {
      id: 2,
      flight: "AI205",
      from: "Chennai",
      to: "Mumbai",
      fare: 4500,
    },
    {
      id: 3,
      flight: "6E301",
      from: "Bangalore",
      to: "Kolkata",
      fare: 6000,
    },
  ];

  return (
    <div>
      <h2>Welcome Guest</h2>
      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((item) => (
            <tr key={item.id}>
              <td>{item.flight}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>₹{item.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h3>Please Login to Book Tickets.</h3>
    </div>
  );
}

export default GuestPage;