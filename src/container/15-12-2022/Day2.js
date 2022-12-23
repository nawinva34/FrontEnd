import "../../style/Sidebar.css";
import React from "react";
import MainContent from "../../layout/22-12-2022/MainContent";
import { Layout } from "antd";
import Sidebar from "../../layout/22-12-2022/Sidebar";
import CardItem from "../../component/15-12-2022/CardItem";
import pathHome2 from "../../utils/data2";
const { Header, Content } = Layout;

const Day2 = () => {
  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Layout className="ml-[200px] bg-[#ffffff]">
          <Header style={{ background: "#cfedfe", marginTop: "0px" }} />
          <Content className="m-10 overflow-visible">
            <div className="bg-[#f3f3f3] rounded-3xl px-1 py-5 px-5">
              <p className="text-lg mt-0">
                <b>Day 2</b>
              </p>
              <p className="text-xs mt-0">Date : 15 Dec 2022</p>
              <br></br>
              <div className="CardItem">
                <CardItem data={pathHome2}/>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Day2;
