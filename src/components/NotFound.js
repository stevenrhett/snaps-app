import React from "react";
import Error from "../error-404-page.svg"
const NotFound = () => (
  <div>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <img src={Error} alt="404 Error" />

  </div>
);

export default NotFound;
