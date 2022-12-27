import FormValidate from "../../container/26-12-2022/FormValidate";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const AccountSetup = () => {
  return (
    <div>
      {/* <FormValidate
        name={"ACCOUNT SETUP"}
        type={true}
      > */}
      <p className="font-bold text-3xl text-[#329ed4] mb-3">ACCOUNT SETUP</p>
      <br></br>
        <Form.Item
          name="Email"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" className="w-[450px]"/>
        </Form.Item>

        <Form.Item
          name="Alternative email (optional)"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your email address",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Alternative email (optional)"
            size="large"
            className="w-[450px]"
          />
        </Form.Item>

        <Form.Item
          name="New Password"
          type="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined  />}
            placeholder="New Password"
            size="large"
            className="w-[450px]"
          />
        </Form.Item>

        <Form.Item
          className="Password"
          type="password"
          name="Confirm New Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined  />}
            placeholder="Confirm New Password"
            size="large"
            className="w-[450px]"
          />
        </Form.Item>
      {/* </FormValidate> */}
    </div>
  );
};

export default AccountSetup;
