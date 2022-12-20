import Auten from "../../component/15-12-2022/Auten";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const ResetPassword = () => {
  return (
    <div>
      <Auten
        name={"Reset Password"}
        buttonText={"Reset Password"}
        forget={false}
      >
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
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

export default ResetPassword;
