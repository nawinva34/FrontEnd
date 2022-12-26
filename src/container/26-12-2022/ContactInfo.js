import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input, DatePicker, Radio } from "antd";
import { UserOutlined } from "@ant-design/icons";
// const { RangePicker } = DatePicker;

const ContactInfo = () => {
  return (
    <div>
      {/* <FormValidate name={"PERSONAL DETAILS"} type={true}> */}
      <p className="font-bold text-2xl text-[#329ed4]">PERSONAL DETAILS</p>
      <br></br>
      <Form.Item
        name="Address"
        rules={[
          {
            required: true,
            message: "Please input your Address",
          },
        ]}
      >
        <Input.Email prefix={<UserOutlined />} placeholder="Address" />
      </Form.Item>

      <Form.Item
        className="City"
        name="City"
        rules={[
          {
            required: true,
            message: "Please input your City",
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

export default ContactInfo;
