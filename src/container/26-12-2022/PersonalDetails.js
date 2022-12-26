import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input, DatePicker, Radio } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PersonalDetail = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-2xl text-[#329ed4]">PERSONAL DETAIL</p>
      <br></br>
      <Form.Item name="First name">
        <Input prefix={<UserOutlined />} placeholder="First name" />
      </Form.Item>

      <Form.Item name="Last name">
        <Input prefix={<UserOutlined />} placeholder="Last name" />
      </Form.Item>

      <Form.Item name="date-picker">
        <DatePicker />
      </Form.Item>

      <Form.Item name="radio-group">
        <Radio.Group>
          <Radio value="a">Male</Radio>
          <Radio value="b">Female</Radio>
        </Radio.Group>
      </Form.Item>

      {/* </FormValidate> */}
    </div>
  );
};

export default PersonalDetail;
