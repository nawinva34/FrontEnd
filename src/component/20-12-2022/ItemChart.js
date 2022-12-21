import { Card } from "antd";
import { Col, Row } from "antd";
import ItemChart2 from "./ItemChart2"
import {
  BarChartOutlined,
  PlusOutlined,
  MailOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const ItemChart = () => {
  return (
    <>
      <div style={{ padding: "10px 40px" }}>
        <Row gutter={[48, 32]}>
          <Col span={12}>
            <ItemChart2 icon={<BarChartOutlined />} title={"Weekly Sales"} bg={"#392f28"} color={"#ffc700"} />
          </Col>
          <Col span={12}>
            <ItemChart2 icon={<PlusOutlined />} title={"New Users"} bg={"#212e48"} color={"#009ef7"} />
          </Col>
          <Col span={12}>
            <ItemChart2 icon={<DatabaseOutlined />} title={"Item Orders"} bg={"#3a2434"} color={"#f1416c"} />
          </Col>
          <Col span={12}>
            <ItemChart2 icon={<MailOutlined />} title={"Bug Reports"} bg={"#1c3238"} color={"#43a976"}  />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ItemChart;
