import React from "react";
import { Row, Col, Card , Avatar} from "antd";
import { CloseOutlined } from "@ant-design/icons";
  const { Meta } = Card;

const Tab2 = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
        <Card
            title="a"
            actions={[<Meta title="b" style={{textAlign : "start" , padding: "0 24px"}}/>]}
          >
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
            actions={[<Meta title="c" style={{textAlign : "start" , padding: "0 24px"}}/>]}
          >
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
            extra={<CloseOutlined key="setting" />}
            style={{ marginBottom: "16px" , height : "100%"}}
          >
            <Meta description="This is the description" />
            <Meta description="This is the description" />
            <Meta description="This is the description" />  
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tab2;
