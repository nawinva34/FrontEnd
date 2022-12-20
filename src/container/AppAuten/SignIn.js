import Auten from "../../component/Auten";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignIn = () => {
  return (
    <div>
      <Auten name={"Sign in"} buttonText={"Sign in"} forget={true}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          className="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
      </Auten>
    </div>
  );
};

export default SignIn;
