import "../../style/Sidebar.css";
import React from "react";
import MainContent from "../../layout/22-12-2022/MainContent";
import { Layout } from "antd";
import Sidebar from "../../layout/22-12-2022/Sidebar";
import BreadCrumb from "../../component/15-12-2022/BreadCrumb";
const { Header } = Layout;

const MainContainer = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="ml-[200px] bg-[#ffffff]">
        <Header style={{ background: "#cfedfe", marginTop: "0px" }} />
        <BreadCrumb />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default MainContainer;
