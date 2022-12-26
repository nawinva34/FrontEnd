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
      <p className="font-bold text-2xl text-[#329ed4]">ACCOUNT SETUP</p>
      <br></br>
      <Form.Item
        name="First name"
        rules={[
          {
            required: true,
            message: "Please input your First name",
          },
        ]}
      >
        <Input.Email prefix={<UserOutlined />} placeholder="First name" />
      </Form.Item>

      <Form.Item
        className="Last name"
        name="Confirm New Password"
        rules={[
          {
            required: true,
            message: "Please input your Last name",
          },
        ]}
      >
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
