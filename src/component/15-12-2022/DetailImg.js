import { Row, Col, Image, Card } from "antd";
const DetailImg = ({ name , address , tel }) => {
    console.log(name);
  return (
    <>
        <p>{name}</p>
        <p>{address}</p>
        <p>{tel}</p>
    </>
    );
};

export default DetailImg;