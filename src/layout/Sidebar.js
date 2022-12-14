import '../style/Sidebar.css';
import React from 'react';
import da from '../img/da.png';
import { Card } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import dataDashboard from '../utils/dataDashboard';
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
                    background: '#9acfff',
                    color: "#ffffff",
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        height: 90,
                        margin: 16,
                        textAlign: 'center',
                        // background: 'rgba(255, 255, 255, 0.2)',
                    }}
                >
                    <img style={{ width: "100px", height: "60px" }} src={da}></img>
                </div>
                <Menu style={{ background: "#9acfff" }} mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                    background: "#ffffff"
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
                        margin: '30px 30px 30px',
                        overflow: 'initial',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            // textAlign: 'center',
                            background: "#f3f3f3",
                            borderRadius: "25px",
                        }}
                    >
                        <p style={{ fontSize: "25px", marginBottom: "0px" }}><b>Day 1</b></p>
                        <p style={{ fontSize: "13px", marginTop: "0px" }}>Date : 14 Dec 2022</p>
                        {dataDashboard.map((e) => {
                            return (
                                <div style={{ display: "flex", justifyContent: 'center', width: "600px", height: "120px" }}>
                                    <Card
                                        style={{
                                            width: 200,
                                        }}
                                    >
                                        <p>{e.title}</p>
                                        <p>{e.Number}</p>
                                        <p></p>
                                    </Card>
                                </div>

                            )
                        })}

                    </div>
                </Content>
                {/* <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer> */}
            </Layout>
        </Layout>
    );
};

export default Sidebar
