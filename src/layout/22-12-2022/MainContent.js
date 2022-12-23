import "../../style/Sidebar.css";
import React from "react";
import profilecircle from "../../img/profilecircle.svg";
import { Col, Row, Button , Card  } from "antd";
import CardItemDetail from "../../component/15-12-2022/CardItemDetail";
import {
  SettingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import dataDashboard from "../../utils/dataDashboard";
const { Content } = Layout;

const MainContainer = () => {
  return (
    <Content className="m-10 overflow-visible">
      <div className="bg-[#f3f3f3] rounded-3xl px-1 py-5 px-5">
        <p className="text-lg mt-0">
          <b>Day 1</b>
        </p>
        <p className="text-xs mt-0">Date : 14 Dec 2022</p>
        <br></br>
        <div>
          <Row gutter={[32, 32]}>
            {dataDashboard.map((e) => {
              return (
                <Col span={8}>
                  <Card className="sm:w-full md:h-full lg:bg-[#d9d9d9]">
                    <div className="sm:flex md:justify-between">
                      <p
                        className="Status"
                        style={{ backgroundColor: e.color }}
                      >
                        {e.top}
                      </p>
                      <SettingOutlined className="mt-[10px] text-[18px]" />
                    </div>
                    <p style={{ marginBottom: "-30px" }}>{e.title}</p>
                    <div className="Container">
                      <b style={{ fontSize: "25px", paddingTop: "20px" }}>
                        {e.Number}
                      </b>
                      <icon style={{ color: e.color, fontSize: "40px" }}>
                        {e.icon}
                      </icon>
                    </div>
                  </Card>
                </Col>
              );
            })}
            <Col span={16}>
              <Card className="CardMain">
                <div className="Card16">
                  <img className="ImgAcc" src={profilecircle}></img>
                  <div>
                    <span className="Text16">
                      Hello, <b>Nawin</b>
                    </span>
                    <p className="Text16">Last Login : 20 mins ago</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="CardMain">
                <CardItemDetail
                  name={"Paid 1"}
                  title={"$102,023.22"}
                  color={"#FFDC27"}
                />
                <CardItemDetail
                  name={"Paid 2"}
                  title={"$10,203.22"}
                  color={"#54A5D2"}
                />
                <CardItemDetail
                  name={"Paid 3"}
                  title={"$2,023.22"}
                  color={"#69C772"}
                />
                <CardItemDetail
                  name={"Paid 4"}
                  title={"$23.22"}
                  color={"#FF9999"}
                />
                <div
                  style={{
                    padding: "15px 40px 15px 40px",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  <Button style={{ background: "#8652DC", color: "white" }}>
                    <b>Payment</b>
                  </Button>
                  <SyncOutlined
                    style={{ fontSize: "30px", color: "#8652DC" }}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default MainContainer;
