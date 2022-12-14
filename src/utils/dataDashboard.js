import {
    LineChartOutlined,
    UserOutlined,
    ShoppingOutlined,
  } from "@ant-design/icons";

const dataDashboard = [
    {
        top: "Overflow",
        title: "Performance",
        Number: "200%",
        icon : <LineChartOutlined />,
        type: "yellow",
        color: "#FFDC27",
    },
    {
        top: "▲ 10%",
        title: "User",
        Number: "5233",
        icon: <UserOutlined />,
        type: "green",
        color: "#69C772"
    },
    {
        top: "▼ 10%",
        title: "Sales",
        Number: "$233",
        icon: <ShoppingOutlined />,
        type: "red",
        color: "#D47474",
    }
]

export default dataDashboard;