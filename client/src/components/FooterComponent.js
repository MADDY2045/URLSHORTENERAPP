import React from "react";

const FooterComponent = () => {
  return (
    <footer
      className="text-light bg-dark"
      style={{ textAlign: "center", padding: "8px" }}
    >
      <h5>
        <span className="span-class">
          &copy;Madhavan {new Date().getFullYear().toString()}
        </span>
      </h5>
    </footer>
  );
};

export default FooterComponent;
