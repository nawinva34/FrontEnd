import FormValidate from "../../container/26-12-2022/FormValidate";
import { Form, Input, Select,  } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Option } = Select;

const ContactInfo = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-3xl text-[#329ed4] mb-3">CONTACT INFO</p>
      <br></br>
      <Form.Item name="Address">
        <Input prefix={<EnvironmentOutlined />} size="large" placeholder="Address" className="w-[450px]"/>
      </Form.Item>

      <Form.Item name="City">
        <Input placeholder="City" size="large" className="w-[450px]"/>
      </Form.Item>

      <Form.Item
        name="Country"
        hasFeedback
        rules={[{ required: true, message: "Please select your country!" }]}
        className="w-[450px]"
      >
        <Select placeholder="Please select a country" size="large" >
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
