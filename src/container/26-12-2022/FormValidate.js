import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Col, Row } from "antd";
import { useState } from "react";
import StepForm from "../../component/26-12-2022/StepForm";
import AccountSetup from "../../component/26-12-2022/AccountSetup";
import ContactInfo from "../../component/26-12-2022/ContactInfo";
import PersonalDetail from "../../component/26-12-2022/PersonalDetails";
import SocialProfiles from "../../component/26-12-2022/SocialProfiles";

const FormValidate = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // console.log(currentStep);
  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(+currentStep + 1);
    }
  };

  const handlePrevClick = () => {
    // console.log("prev")
    if (currentStep > 0) {
      setCurrentStep(+currentStep - 1);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center mt-[150px]">
        <Card className="bg-[#ffffff] w-[1200px] h-full">
          <Row>
            <Col span={8} className="bg-[#4fc4fd] m-[-12px] p-20">
              <StepForm current={currentStep} />
            </Col>
            <Col span={12} className="pl-[130px] pt-10">
              <Row>
                {currentStep === 0 && <AccountSetup />}
                {currentStep === 1 && <PersonalDetail />}
                {currentStep === 2 && <ContactInfo />}
                {currentStep === 3 && <SocialProfiles />}
              </Row>
            </Col>
            <Col span={4}>
              <div className="ml-20">
                {currentStep !== 0 && (
                  <Button
                    onClick={handlePrevClick}
                    type="text"
                    className="h-20 text-3xl text-sky-600"
                  >
                    <ArrowUpOutlined />
                  </Button>
                )}
              </div>
              <div className="mt-[300px] ml-20">
                {currentStep !== 3 && (
                  <Button
                    onClick={handleNextClick}
                    type="text"
                    className="h-20 text-3xl text-sky-600"
                  >
                    <ArrowDownOutlined />
                  </Button>
                )}
              </div>
              {currentStep === 3 && <Button>Register</Button>}
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default FormValidate;
