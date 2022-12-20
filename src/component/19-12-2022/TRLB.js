import { Row, Col, Image, Card } from "antd";
import DetailImg from "../15-12-2022/DetailImg";
const TRLB = ({ data }) => {
  return (
    <>
      {data.type === "bottom" && (
        <Card>
          <DetailImg name={data.name} address={data.address} tel={data.tel} />
          <img width={200} src={data.src}></img>
        </Card>
      )}
      {data.type === "top" && (
        <Card>
          <img width={200} src={data.src}></img>
          <DetailImg name={data.name} address={data.address} tel={data.tel} />
        </Card>
      )}

      {data.type === "right" && (
        <Card>
          <div style={{ display: "flex" }}>
            <div style={{ width: "200px" }}>
              <DetailImg
                name={data.name}
                address={data.address}
                tel={data.tel}
              />
            </div>
            <img width={200} src={data.src}></img>
          </div>
        </Card>
      )}
      {data.type === "left" && (
        <Card>
          <div style={{ display: "flex" }}>
            <img width={200} src={data.src}></img>
            <div style={{ width: "200px" }}>
              <DetailImg
                name={data.name}
                address={data.address}
                tel={data.tel}
              />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default TRLB;
