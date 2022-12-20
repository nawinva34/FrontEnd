import { Col, Row, Slider } from "antd";
import TRLB from "../../component/19-12-2022/TRLB";

const Task = () => {
  const data = [
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      name: "Dog1",
      address: "111/Dog1/BKK",
      tel: "111-111",
      type: "top",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      name: "Dog2",
      address: "222/Dog2/BKK",
      tel: "222-222",
      type: "bottom",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      name: "Dog3",
      address: "333/Dog3/BKK",
      tel: "333-333",
      type: "left",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      name: "Dog4",
      address: "444/Dog4/BKK",
      tel: "444-444",
      type: "right",
    },
  ];

  return (
    <div>
      <Row gutter={[32, 32]}>
        {data.map((e) => {
          return (
              <Col span={12}>
                <TRLB data={e} />
              </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Task;
