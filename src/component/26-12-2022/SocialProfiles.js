import FormValidate from "../../container/26-12-2022/FormValidate";
import { Form, Input, Select,  } from "antd";

const SocialProfiles = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-3xl mb-3 text-[#329ed4]">SOCIAL PROFILES</p>
      <br></br>
      <Form.Item name="Facebook">
        <Input size="large" placeholder="Facebook" className="w-[450px]"/>
      </Form.Item>

      <Form.Item name="Twitter">
        <Input size="large" placeholder="Twitter" className="w-[450px]"/>
      </Form.Item>

      <Form.Item name="Instagram">
        <Input size="large" placeholder="Instagram" className="w-[450px]"/>
      </Form.Item>

      {/* </FormValidate> */}
    </div>
  );
};

export default SocialProfiles;
