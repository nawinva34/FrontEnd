import { Card } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const CardNewOld = ({ icon , name , title}) => {
    console.log(icon)
  return (
    <>
    {/* <p>Test Card New Old</p> */}
      <Card>
        <div style={{display : "flex" , justifyContent : "space-between"}}>
          <div style={{fontSize : "50px" , display: "flex" , alignItems: "center"}}>{icon}</div>
          <div>
            <h1>{name}</h1>
            <h1>{title}</h1>
          </div>
          <MoreOutlined style={{ fontSize : "30px"}}/>
        </div>
      </Card>


    </>
  );
};

export default CardNewOld;
