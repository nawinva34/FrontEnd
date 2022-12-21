import { Card, Col, Row, Slider } from "antd";
// import CardBalace from "../../component/19-12-2022/CardBalace";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import CardBalance from "../../component/19-12-2022/CardBalace";
import CardName from "../../component/19-12-2022/CardName";

const Task2 = () => {
  const data = [
    // {
    //   icon: <CaretUpOutlined />,
    //   icon2: <MoreOutlined />,
    //   name: "New",
    //   title: "+200",
    //   title2: "",
    //   type: "Card1",
    // },
    // {
    //   icon: <CaretDownOutlined />,
    //   icon2: <MoreOutlined />,
    //   name: "Old",
    //   title: "-100",
    //   title2: "",
    //   type: "Card1",
    // },
    {
      icon: <YoutubeOutlined />,
      icon2: "",
      name: "15:30:00",
      title: "Name1",
      title2: "Info!",
      type: "Card2",
    },
    {
      icon: <InstagramOutlined />,
      icon2: "",
      name: "$200.00",
      title: "Name2",
      title2: "",
      type: "Card2",
    },
    {
      icon: <FacebookOutlined />,
      icon2: "",
      name: "20:12:11",
      title: "Name3",
      title2: "Preview",
      type: "Card2",
    },
  ];

  //   console.log("CardBalance");

  return (
    <div style={{ background: "#f3f3f3", padding: "20px" }}>
      <Row gutter={[8, 16]}>
        <div style={{ width: "100vw" }}>
          <Card>
            <CardBalance />
          </Card>
        </div>

        {data.map((e) => {
          return (
            <>
              <Col
                span={8}
                style={{ paddingLeft: "30px", paddingRight: "30px" }}
              >
                <CardName data={e} />
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default Task2;
