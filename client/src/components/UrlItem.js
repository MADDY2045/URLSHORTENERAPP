import React from "react";
import { BASEURL } from "../config/axios";

const UrlItem = ({ item }) => {
  return (
    <tr>
      <td>
        <a href={`${item.full}`} target="_blank" rel="noopener noreferrer">
          {item.full}
        </a>
      </td>
      <td>
        <a
          href={
            process.env.NODE_ENV === "production"
              ? document.location.href + "api/urls/" + item.short
              : BASEURL + "/api/urls/" + item.short
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.short}
        </a>
      </td>
      <td> {item.clicks} </td>
    </tr>
  );
};

export default UrlItem;
