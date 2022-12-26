import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input, Select,  } from "antd";

const SocialProfiles = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-2xl text-[#329ed4]">SOCIAL PROFILES</p>
      <br></br>
      <Form.Item name="Facebook">
        <Input placeholder="Facebook" />
      </Form.Item>

      <Form.Item name="Twitter">
        <Input placeholder="Twitter" />
      </Form.Item>

      <Form.Item name="Instagram">
        <Input placeholder="Instagram" />
      </Form.Item>

      {/* </FormValidate> */}
    </div>
  );
};

export default SocialProfiles;
