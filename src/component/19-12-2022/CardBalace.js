import { Card } from "antd";
import CardNewOld from "./CardNewOld";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Col, Row, Slider } from "antd";

const CardBalance = () => {
  console.log('Card Balance');
  return (
    <>
    {/* <p>Test</p> */}
    {/* <CardNewOld/> */}

    <Row gutter={[32, 32]} >
        <Col span={7}>
          <CardNewOld icon={<CaretUpOutlined />} name={"New"} title={"+200"}/>
        </Col>
        <Col span={10}>
          <div style={{ textAlign: "center" }}>
            <h1>Balance</h1>
            <h1>Text Information</h1>
          </div>
        </Col>
        <Col span={7}>
          <CardNewOld icon={<CaretDownOutlined />} name={"Old"} title={"-100"}/>
        </Col>
      </Row>


    </>
  );
};

export default CardBalance;
