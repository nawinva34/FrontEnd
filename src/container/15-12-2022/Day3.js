import CardCCTV from "../../component/15-12-2022/CardCCTV";
import dataCCTV from "../../utils/DataCCTV";
import dataCCTV2 from "../../utils/DataCCTV2";
import { Col, Row } from "antd";
import CardMap from "../../component/15-12-2022/CardMap";
import CardCCTV2 from "../../component/15-12-2022/CardCCTV2";

const Day3 = () => {
  return (
    <>
      <Row gutter={[32, 32]} className="p-10">
        <Col span={15}>
          <CardMap />
        </Col>
        <Col span={9}>
          <CardCCTV2 data={dataCCTV2} />
        </Col>
        <Col span={24}>
          <CardCCTV data={dataCCTV} />
        </Col>
      </Row>
    </>
  );
};

export default Day3;
