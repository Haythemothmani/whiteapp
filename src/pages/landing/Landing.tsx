import * as React from "react";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <div className="container-fluid">
      <ul>
        <li>
          <Link to={`/landing`}>Landing</Link>
        </li>
        <li>
          <Link to={`/samples`}>Samples</Link>
        </li>
      </ul>
    </div>
  );
};
