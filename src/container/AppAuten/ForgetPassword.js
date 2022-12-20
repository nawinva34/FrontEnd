import Auten from "../../component/Auten";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const ForgetPassword = () => {
  return (
    <div>
      <Auten name={"Forget Password"} buttonText={"Forgot Password"}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="Email"
          />
        </Form.Item>
      </Auten>
    </div>
  );
};

export default ForgetPassword;
