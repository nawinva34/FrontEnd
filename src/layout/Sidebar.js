import "../style/Sidebar.css";
import React from "react";
import da from "../img/da.png";
import { Col, Row, Button } from "antd";
import { Card } from "antd";
import {
  WalletOutlined,
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
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: 90,
            margin: 16,
            textAlign: "center",
            // background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
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
              // textAlign: 'center',
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
                      <Card
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#d9d9d9",
                        }}
                      >
                        <p style={{paddingBottom: "15px"}}>{e.top}</p>
                        <p style={{ marginBottom: "0px", marginBottom: "-30px" }}>
                          {e.title}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between"}}>
                          <b style={{ fontSize: "25px" , paddingTop : "20px"}}>{e.Number}</b>
                          <icon
                            style={{
                              color: e.color,
                              fontSize: "40px",
                              
                            }}
                          >
                            {e.icon}
                          </icon>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
                <Col span={16}>
                  <Card
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#d9d9d9",
                    }}
                  ></Card>
                </Col>
                <Col span={8}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#d9d9d9",
                      padding: "0px",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        padding: "16px 16px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Paid 1</p>
                        <p>
                          <b>$102,023.22</b>
                        </p>
                      </div>
                      <CodepenCircleOutlined
                        style={{
                          fontSize: "30px",
                          paddingTop: "5px",
                          color: "#FFDC27",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        paddingTop: "12px",
                        borderBottom: "1px solid gray",
                        padding: "16px 16px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Paid 2</p>
                        <p>
                          <b>$10,203.22</b>
                        </p>
                      </div>
                      <CodepenCircleOutlined
                        style={{
                          fontSize: "30px",
                          paddingTop: "5px",
                          color: "#54A5D2",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        paddingTop: "12px",
                        borderBottom: "1px solid gray",
                        padding: "16px 16px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p>Paid 3</p>
                        <p>
                          <b>$2,023.22</b>
                        </p>
                      </div>
                      <CodepenCircleOutlined
                        style={{
                          fontSize: "30px",
                          paddingTop: "5px",
                          color: "#69C772",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        paddingTop: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "16px 16px",
                      }}
                    >
                      <div>
                        <p>Paid 4</p>
                        <p>
                          <b>$23.22</b>
                        </p>
                      </div>
                      <CodepenCircleOutlined
                        style={{
                          fontSize: "30px",
                          paddingTop: "5px",
                          color: "#FF9999",
                        }}
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
                  </div>
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
