/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Badge } from "primereact/badge";
import "./style.css";

const BadgeText = ({ text, value, type }) => {
  return (
    <div className="py-1 badgeTextItem">
      <Badge value={value} severity={type} />
      <a className="pl-2">{text}</a>
    </div>
  );
};

export default BadgeText;
