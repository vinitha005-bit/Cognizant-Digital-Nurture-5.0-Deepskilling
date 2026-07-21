import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 80 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 60 },
        { name: "Ravindra Jadeja", score: 88 },
        { name: "R Ashwin", score: 69 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 90 },
        { name: "Surya Kumar", score: 77 },
        { name: "Ishan Kishan", score: 50 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {
                    players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

            <h3>Players with Score below 70</h3>

            <ul>
                {
                    below70.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;