import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const I = styled.i`
    margin: 0;
    font-size: 20px;
    transition: color 400ms;

    :hover {
        color: #ff0080;
    }
`;

function LinkIcon({ icon, to }) {
  return (
    <Link
      to={to}
      style={{
        margin: "0 20px",
        textDecoration: "none",
        color: "black",
        display: "flex",
        alignItems: "center"
      }}
    >
      <I className="material-icons">
        {icon}
      </I>
    </Link>
  );
}

export default LinkIcon;
