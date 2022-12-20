import { Card  } from "antd";

const CardName = ({ data }) => {
//   console.log(data);
  return (
    <>
      {data.type === "Card2" && (
        <Card style={{textAlign : "center" , height : "20em"}}>
          <h2>{data.name}</h2>
          <hr></hr>
          <h3>{data.title}</h3>
          <hr></hr>
          <div style={{ fontSize : "30px"}}>{data.icon}</div>
          <h3>{data.title2}</h3>
        </Card>
      )}
    </>
  );
};

export default CardName;
