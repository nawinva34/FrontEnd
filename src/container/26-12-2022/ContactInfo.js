
import FormValidate from "../../component/26-12-2022/FormValidate";
import { Form, Input, DatePicker } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

const AccountSetup = () => {
  return (
    <div>
      <FormValidate name={"PERSONAL DETAILS"} type={true}>
        <Form.Item
          name="First name"
          rules={[
            {
              required: true,
              message: "Please input your First name",
            },
          ]}
        >
          <Input.Email prefix={<UserOutlined />} placeholder="First name" />
        </Form.Item>

        <Form.Item
          className="Last name"
          name="Confirm New Password"
          rules={[
            {
              required: true,
              message: "Please input your Last name",
            },
          ]}
        >
          <Input.Password
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Last name"
          />
        </Form.Item>

        <Form.Item name="date-picker" label="DatePicker" >
          <DatePicker />
        </Form.Item>
      </FormValidate>
    </div>
  );
};

export default AccountSetup;
