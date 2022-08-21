import React from "react";
import UrlItem from "./UrlItem";
import Spinner from "./Spinner";

const UrlTable = ({ state, loading }) => {
  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>FULL URL</th>
            <th>SHORT URL</th>
            <th>HITS</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                <Spinner />
              </td>
            </tr>
          ) : state && state.length > 0 ? (
            state.map((item, index) => {
              return <UrlItem key={index} item={item} />;
            })
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No URLs found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
