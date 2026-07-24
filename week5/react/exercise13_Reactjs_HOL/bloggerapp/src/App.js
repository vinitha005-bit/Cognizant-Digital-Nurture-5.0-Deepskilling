import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    // Variable Element Rendering
    let courseComponent;

    if (showCourses) {
        courseComponent = <CourseDetails />;
    }

    return (

        <div style={{ margin: "20px" }}>

            <h1>Blogger Application</h1>

            {/* 1. If Else */}

            {
                showBooks ?

                    <BookDetails />

                    :

                    <h2>No Books Available</h2>
            }

            <hr />

            {/* 2. Logical AND */}

            {
                showBlogs && <BlogDetails />
            }

            <hr />

            {/* 3. Variable Rendering */}

            {
                courseComponent
            }

        </div>

    );

}

export default App;