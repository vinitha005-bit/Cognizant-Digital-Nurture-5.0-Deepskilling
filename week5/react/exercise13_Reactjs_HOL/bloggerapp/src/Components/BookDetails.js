import React from "react";

function BookDetails() {

    const books = [
        { id: 1, name: "Java Programming", price: 500 },
        { id: 2, name: "React JS", price: 650 },
        { id: 3, name: "Python", price: 450 }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        books.map(book => (

                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>₹{book.price}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default BookDetails;