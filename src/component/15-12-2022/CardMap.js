import "../../style/App.css";
import { Card, Col, Row } from "antd";
import CCTV1 from "../../img/CCTV1.png";
import campaign from "../../img/campaign.png";

const CardMap = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex mb-1">
          <img src={campaign}></img>
          <p className="text-[#008F4A] text-[30px]">อัปเดตล่าสุด</p>
        </div>
        <div className="relative">
            <img src={CCTV1} className="h-[523px]"></img>
            <div className="absolute bottom-0 bg-green-400/50 p-3">
                <p className="text-2xl text-[#FFFFFF] font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="text-base text-[#FFFFFF] text-end mr-8">06/12/2022 15.27 น.</p>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default CardMap;
