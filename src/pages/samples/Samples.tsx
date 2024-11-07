import * as React from "react";
import { useGetSamples } from "../../queries/queries";
import { Link } from "react-router-dom";

export const Samples: React.FC = () => {
  const { data: samples, isFetching } = useGetSamples(true);
  return (
    <div className="container-fluid">
      <h3> Samples </h3>

      {isFetching && <span> loading ... </span>}

      {samples?.length ? (
        <ul>
          {samples.map((sample: any) => (
            <li key={sample.id}>
              <Link to={`contacts/${sample.id}`}>
                {sample.first || sample.last ? (
                  <>
                    {sample.first} {sample.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}
                {sample.favorite && <span>★</span>}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </div>
  );
};
