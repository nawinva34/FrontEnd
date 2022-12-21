import React from "react";
import { useState } from "react";
import { DownOutlined, AppstoreOutlined } from "@ant-design/icons";
import {
  Dropdown,
  message,
  Space,
  Button,
  Select,
  Checkbox,
  Switch,
} from "antd";

const items = [
  {
    label: (
      <>
        <h3>Filter Options</h3>
        <hr></hr>
        <p>Status:</p>
        <Select
          defaultValue="Approved"
          options={[
            {
              value: "jack",
              label: "Approved",
            },
            {
              value: "lucy",
              label: "Pending",
            },
            {
              value: "disabled",
              label: "Inprocess",
            },
            {
              value: "Yiminghe",
              label: "Rejected",
            },
          ]}
        />
        <br></br>
        <p>Member Type:</p>
        <div style={{ display: "flex" }}>
          <Checkbox>Author</Checkbox>
          <Checkbox>Customer</Checkbox>
        </div>
        <p>Notification:</p>
        <Switch defaultChecked />
        <div style={{ paddingTop : "15px" , display: "flex", justifyContent: "flex-end"}}>
          <Button type="text">Reset</Button>
          <Button type="primary">Apply</Button>
        </div>
      </>
    ),
    key: "1",
  },
];

const DropDown = () => {
  const [visible, setVisible] = useState(false);
  const handleDropdownVisibility = (value) => {
    setVisible(value);
  };
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomRight"
      menu={{ items }}
      style={{ background: "#1e1e2d" }}
      open={visible}
      onOpenChange={(val) => handleDropdownVisibility(val)}
    >
      <Space>
        <AppstoreOutlined />
      </Space>
    </Dropdown>
  );
};

export default DropDown;
