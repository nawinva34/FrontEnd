import "../../style/Sidebar.css";
import React from "react";
import da from "../../img/da.png";

import {
  AppstoreOutlined,
  LeftOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";
const { Sider } = Layout;
const items = [
  LeftOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  label: `Day ${index + 1}`,
}));

const Sidebar = () => {
  return (
    <Sider class="bg-[#9acfff] overflow-auto w-[368rem] h-screen text-center fixed">
      <div className="flex justify-center h-[90px] mt-[29px]">
        <img class="w-[100px] h-[60px]" src={da}></img>
      </div>
      <Menu
        className="bg-[#9acfff]"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
      <div className="mt-20 w-231">
        <Button className="w-231" type="primary" icon={<LeftOutlined />}>Back</Button>
      </div>
    </Sider>
    
  );
};

export default Sidebar;
