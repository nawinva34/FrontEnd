import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input } from "antd";

const FormValidate = ({ children, name , type}) => {

  return (
    <>
      <div className="container">
        <Card className="flex">
            <div>
                
            </div>
            <div>
                <p className="">{name}</p>
                <Form></Form>
            </div>
        </Card>
      </div>
    </>
  );
};

export default FormValidate;
