import React from "react";
import Error from "../error-404-page.svg"
import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="not-found">
      <Link to="/">Return to Home Page</Link>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <img src={Error} alt="404 Error" />
  </div>
);

export default NotFound;
