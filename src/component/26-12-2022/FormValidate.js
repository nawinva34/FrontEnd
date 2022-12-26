import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input } from "antd";
import StepForm from "../../container/26-12-2022/StepForm";
import AccountSetup from "../../container/26-12-2022/AccountSetup";
import ContactInfo from "../../container/26-12-2022/ContactInfo";
import PersonalDetail from "../../container/26-12-2022/PersonalDetails";


const FormValidate = () => {

  return (
    <>
      <Card className="w-[1536px] h-[910px]">
        <div className="flex justify-around">
            <div className="">
                <StepForm />
            </div>
            <div>
                {/* <p className="font-bold text-2xl text-[#329ed4">{name}</p> */}
                <PersonalDetail />
            </div>
        </div>
      </Card>
    </>
  );
};

export default FormValidate;
