import "../style/Sidebar.css";
import React from "react";
import da from "../img/da.png";
import profilecircle from "../img/profilecircle.svg";
import { Col, Row, Button } from "antd";
import { Card } from "antd";
import {
  WalletOutlined,
  SettingOutlined,
  SyncOutlined,
  CodepenCircleOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import dataDashboard from "../utils/dataDashboard";
const { Header, Content, Footer, Sider } = Layout;
const items = [
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
  // icon: React.createElement(icon),
  label: `Day ${index + 1}`,
}));

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider class="bg-[#9acfff] overflow-auto w-[368rem] h-screen text-center fixed">
        <div className="flex justify-center h-[90px] mt-[29px]">
          <img class="w-[100px] h-[60px]" src={da}></img>
        </div>
        <Menu className="bg-[#9acfff]"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout className="ml-[200px] bg-[#ffffff]">
        <Header className="p-0 bg-[#cfedfe]"/> 
        <Content className="m-10 overflow-visible" >
          <div className="bg-[#f3f3f3] rounded-3xl"
            style={{
              padding: "1% 5% 10% 5%",  
            }}
          >
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
                      <Card className="CardMain">
                        <div className="HeaderText">
                          <p
                            className="Status"
                            style={{ backgroundColor: e.color }}
                          >
                            {e.top}
                          </p>
                          <SettingOutlined className="Setting" />
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
                    <div className="Paid1">
                      <div>
                        <p>Paid 1</p>
                        <b>$102,023.22</b>
                      </div>
                      <CodepenCircleOutlined
                        className="Icon"
                        style={{ color: "#FFDC27" }}
                      />
                    </div>
                    <div className="Paid1">
                      <div>
                        <p>Paid 2</p>
                        <b>$10,203.22</b>
                      </div>
                      <CodepenCircleOutlined
                        className="Icon"
                        style={{ color: "#54A5D2" }}
                      />
                    </div>
                    <div className="Paid1">
                      <div>
                        <p>Paid 3</p>
                        <b>$2,023.22</b>
                      </div>
                      <CodepenCircleOutlined
                        className="Icon"
                        style={{ color: "#69C772" }}
                      />
                    </div>
                    <div className="Paid4">
                      <div>
                        <p>Paid 4</p>
                        <b>$23.22</b>
                      </div>
                      <CodepenCircleOutlined
                        className="Icon"
                        style={{ color: "#FF9999" }}
                      />
                    </div>
                    <div
                      style={{
                        padding: "0px 40px 15px 40px",
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
      </Layout>
    </Layout>
  );
};

export default Sidebar;
