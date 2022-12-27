import FormValidate from "../../container/26-12-2022/FormValidate";
import { Form, Input, DatePicker, Radio } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PersonalDetail = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-3xl text-[#329ed4] mb-3">PERSONAL DETAIL</p>
      <br></br>
      <Form.Item name="First name">
        <Input prefix={<UserOutlined />} size="large" placeholder="First name" className="w-[450px]"/>
      </Form.Item>

      <Form.Item name="Last name">
        <Input prefix={<UserOutlined />} size="large" placeholder="Last name" className="w-[450px]" />
      </Form.Item>

      <Form.Item name="date-picker">
        <DatePicker size="large" className="w-[450px]"/>
      </Form.Item>

      <Form.Item name="radio-group" >
        <Radio.Group >
          <Radio value="a">Male</Radio>
          <Radio value="b">Female</Radio>
        </Radio.Group>
      </Form.Item>

      {/* </FormValidate> */}
    </div>
  );
};

export default PersonalDetail;
