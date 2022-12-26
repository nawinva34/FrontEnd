import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input, Select,  } from "antd";
import { LockOutlined, EnvironmentOutlined } from "@ant-design/icons";
const { Option } = Select;

const ContactInfo = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-2xl text-[#329ed4]">CONTACT INFO</p>
      <br></br>
      <Form.Item name="Address">
        <Input prefix={<EnvironmentOutlined />} placeholder="Address" />
      </Form.Item>

      <Form.Item name="City">
        <Input placeholder="Alternative email (optional)" />
      </Form.Item>

      <Form.Item
        name="Country"
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
      >
        <Select placeholder="Please select a country">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
          <Option value="usa">ThaiLand</Option>
        </Select>
      </Form.Item>

      {/* </FormValidate> */}
    </div>
  );
};

export default ContactInfo;
