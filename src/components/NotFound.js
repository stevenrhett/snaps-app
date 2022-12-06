import React from "react";
import Error from "../error-404-page.svg"
const NotFound = () => (
  <div>
      <img src={Error} alt="404 Error" />
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
