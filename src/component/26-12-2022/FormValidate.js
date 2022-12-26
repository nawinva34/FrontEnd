import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Col, Row } from "antd";
import StepForm from "../../container/26-12-2022/StepForm";
import AccountSetup from "../../container/26-12-2022/AccountSetup";
import ContactInfo from "../../container/26-12-2022/ContactInfo";
import PersonalDetail from "../../container/26-12-2022/PersonalDetails";
import SocialProfiles from "../../container/26-12-2022/SocialProfiles";

const FormValidate = () => {
  return (
    <>
      <Card className="bg-[#f3f3f3] w-[1593px]">
        <Row>
          <Col span={6} className="bg-[#4fc4fd] m-[-12px] p-20">
            <StepForm />
          </Col>
          <Col span={18} className="p-20">
            <SocialProfiles />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default FormValidate;
