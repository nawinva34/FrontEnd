import React from "react";
import { Row, Col, Card } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Tab3 = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Col span={24}>
            <Card
              style={{ marginBottom: "16px" }}
              actions={[<Meta title="a" />, <CloseOutlined key="setting" />]}
            >
              <Meta description="This is the description" />
              <Meta description="This is the description" />
              <Meta description="This is the description" style={{marginBottom : "100px"}}/>
            </Card>
          </Col>
          <Col span={24}>
            <Card title="b">
              <Meta description="This is the description" />
              <Meta description="This is the description" />
              <Meta description="This is the description" style={{marginBottom : "100px"}}/>
            </Card>
          </Col>
        </Col>
        <Col span={8}>
          <Card
            title="c"
            extra={<CloseOutlined key="setting" />}
            style={{ height: "100%" }}
            actions={[<Meta title="d" />, <CloseOutlined key="setting" />]}
          >
            <p style={{marginBottom : "110px"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Col span={24}>
            <Card title="r" style={{ height: "100%", marginBottom: "16px" }}>
              <Meta description="This is the description" />
              <Meta description="This is the description" />
              <Meta description="This is the description" />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="f" style={{ height: "100%", marginBottom: "16px" }} actions={[<Meta title="c" />]}
            extra={<CloseOutlined key="setting" />}>
              <Meta description="This is the description" />
              <Meta description="This is the description" />
              <Meta description="This is the description" />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="g" style={{ height: "100%" }}>
              <Meta description="This is the description" />
              <Meta description="This is the description" />
              <Meta description="This is the description" />
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Tab3;
