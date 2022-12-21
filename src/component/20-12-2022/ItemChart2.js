import { Card } from "antd";

const ItemChart2 = ({ icon, title, bg, color }) => {
  return (
    <>
      <Card
        style={{
          background: bg,
          border: bg,
          color: color,
          paddingLeft: "15px",
        }}
      >
        <div style={{ fontSize: "50px", paddingTop: "10px" }}>{icon}</div>
        <h3 style={{ margin: "10px 0px" }}>{title}</h3>
      </Card>
    </>
  );
};

export default ItemChart2;
