import React from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

const Tab1 = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="a" style={{ height: "100%" }}>
            <p>
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
        <Col span={12}>
          <Card
            title="b"
            style={{ marginBottom: "16px" }}
            actions={[<Meta title="c" style={{textAlign : "start" , padding: "0 24px"}}/>]}
          >
            <Meta description="This is the description" />
            <Meta description="This is the description" />
            <Meta description="This is the description" />  
          </Card>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="d">
                <Meta description="This is the description" />
                <Meta description="This is the description" />
                <Meta description="This is the description" />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="e">
                <Meta description="This is the description" />
                <Meta description="This is the description" />
                <Meta description="This is the description" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Tab1;
