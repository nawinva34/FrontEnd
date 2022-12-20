import Auten from "../../component/Auten";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const CreatePassword = () => {
  return (
    <div>
      <Auten name={"Create Password"} buttonText={"Create Password"} forget={false}>
      <Form.Item
          name="New Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="New Password"
          />
        </Form.Item>

        <Form.Item
          className="Password"
          name="Confirm New Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm New Password"
          />
        </Form.Item>
      </Auten>
    </div>
  );
};

export default CreatePassword;
