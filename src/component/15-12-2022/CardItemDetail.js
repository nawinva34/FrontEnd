import "../../style/Sidebar.css";
import React from "react";
import { Card } from "antd";
import { CodepenCircleOutlined } from "@ant-design/icons";

const CardItemDetail = ({ name, title, color }) => {
  return (
    <>
        <div className="Paid1">
          <div>
            <p>{name}</p>
            <b>{title}</b>
          </div>
          <CodepenCircleOutlined
            className="Icon"
            style={{ color: color }}
          />
        </div>
    </>
  );
};

export default CardItemDetail;
