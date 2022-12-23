import "../../style/App.css";
import { Card, Col, Row } from "antd";
import arrow_circle_right from "../../img/arrow_circle_right.png";

const CardCCTV2 = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-[#008F4A] text-[30px] mb-3">เหตุการณ์ล่าสุด</p>
        <div className="flex">
            <p className="text-[#008F4A] text-xl mt-0.5">ดูทั้งหมด</p>
            <img src={arrow_circle_right} className="ml-2 mt-2 w-[20px] h-[20px]"></img>
        </div>
        
      </div>
      <Row>
        {props.data.map((d) => {
          return (
            <Col span={24}>
              <div className="flex pb-3">
                <div className="w-[200px] h-[121px] mr-2">
                  <img src={d.img}></img>
                </div>
                <div className="w-[230px]">
                  <div className="flex justify-start">
                    <img src={d.icon1}></img>
                    <span className="text-xl pl-1">{d.title}</span>
                  </div>
                  <p className="text-base">{d.content}</p>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img src={d.icon2} className="pr-2"></img>
                      <p className="text-[#3C3C3B] text-sm">{d.where}</p>
                    </div>
                    <p className="text-[#707070] text-xs pt-0.5">{d.date}</p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CardCCTV2;
