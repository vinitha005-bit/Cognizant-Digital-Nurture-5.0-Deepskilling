import React from "react";

function UserPage() {
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

  function bookTicket(flight) {
    alert("Ticket booked successfully for " + flight);
  }

  return (
    <div>
      <h2>Welcome User</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((item) => (
            <tr key={item.id}>
              <td>{item.flight}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>₹{item.fare}</td>
              <td>
                <button onClick={() => bookTicket(item.flight)}>
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;