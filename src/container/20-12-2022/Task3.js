import React from "react";
import { Col, Tabs, Row, Card } from "antd";
import { ChartReport } from "../../component/20-12-2022/ChartReport";
import ItemChart from "../../component/20-12-2022/ItemChart";
import TimeLine from "../../component/20-12-2022/TimeLine";
import DropDown from "../../component/20-12-2022/DropDown";

const Task3 = () => {
  return (
    <div>
      <div style={{ height: "800px", background: "#151521", padding: "20px" }}>
        <Row gutter={[48, 48]}>
          <Col span={12}>
            <Card
              style={{
                background: "#f1416c",
                border: "#151521",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 style={{ color: "#FFFFFF" }}>Sales Statistics</h1>
                <DropDown />
              </div>
              <div style={{ marginBottom: "-80px" }}>
                <ChartReport />
              </div>
            </Card>
            <Card
              style={{
                background: "#1e1e2d",
                border: "#1e1e2d",
                height: "300px",
                padding: "20px",
              }}
            >
              <div style={{ transform: "translate(0px, -90px)" }}>
                <ItemChart />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              style={{
                background: "#1e1e2d",
                border: "#1e1e2d",
                padding: "20px",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 style={{ color: "#FFFFFF" }}>Activities</h1>
                <DropDown />
              </div>
              <div>
                <TimeLine />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Task3;
