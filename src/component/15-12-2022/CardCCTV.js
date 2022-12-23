import "../../style/App.css";
import { Col, Row, Pagination } from "antd";
import { Input } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const CardCCTV = (props) => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <p className="text-[#008F4A] text-[30px] mb-3">ประชาสัมพันธ์ทั้งหมด</p>
        <Input placeholder="ค้นหา" suffix={<FilterOutlined />} className="w-[433px] h-[50px]" />
      </div>
      <Row gutter={[32, 32]}>
        {props.data.map((d) => {
          return (
            <Col span={6}>
              <div>
                <div>
                  <img src={d.img} className="w-full"></img>
                </div>
                <p className="mt-3 text-xl">{d.title}</p>
                <p className="text-base mt-1">{d.content}</p>
                <div className="flex justify-between mt-4">
                  <u className="text-[#2E5DD7] text-sm">{d.link}</u>
                  <p className="text-[#707070] text-xs">{d.date}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="flex justify-center mt-10">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default CardCCTV;
