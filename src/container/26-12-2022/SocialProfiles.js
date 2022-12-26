import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined  } from "@ant-design/icons";

const AccountSetup = () => {
  return (
    <div>
      <FormValidate
        name={"Account Setup"}
        type={true}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email address",
            },
          ]}
        >
            <Input.Email 
            prefix={<MailOutlined />}
            placeholder="Email"
            />
        </Form.Item>

        <Form.Item
          name="Alternative email (optional)"
          rules={[
            {
              required: true,
              message: "Please input your email address",
            },
          ]}
        >
            <Input.Email 
            prefix={<MailOutlined />}
            placeholder="Alternative email (optional)"
            />
        </Form.Item>

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
      </FormValidate>
    </div>
  );
};

export default AccountSetup;
