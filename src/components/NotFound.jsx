import React from "react";
import {Link} from "react-router-dom";
function NotFound(){

    return <section className="my-8 text-center">
    <h1 className="text-6xl">404</h1>
    <Link to="/" className="cursor-pointer text-blue-400">Click here to Go back to Home </Link>
    </section>
}

export default NotFound;