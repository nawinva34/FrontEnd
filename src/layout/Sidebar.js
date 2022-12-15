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
      <Sider
        style={{
          background: "#9acfff",
          color: "#ffffff",
          overflow: "auto",
          width: "368px",
          height: "100vh",
          position: "fixed",
          textAlign: "center",
        }}
      >
        <div className="IconDa">
          <img style={{ width: "100px", height: "60px" }} src={da}></img>
        </div>
        <Menu
          style={{ background: "#9acfff" }}
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          background: "#ffffff",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#cfedfe",
          }}
        />
        <Content
          style={{
            margin: "30px 30px 30px",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: "1% 5% 10% 5%",
              background: "#f3f3f3",
              borderRadius: "25px",
            }}
          >
            <p style={{ fontSize: "25px", marginBottom: "0px" }}>
              <b>Day 1</b>
            </p>
            <p style={{ fontSize: "13px", marginTop: "0px" }}>
              Date : 14 Dec 2022
            </p>
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
