import { Button, Steps } from "antd";
import { useState } from "react";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Account setup",
      content: "Content for step 1",
    },
    {
      title: "Personal details",
      content: "Content for step 2",
    },
    {
      title: "Contact info",
      content: "Content for step 3",
    },
    {
      title: "Social Profiles",
      content: "Content for step 4",
    },
  ];

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Steps current={currentStep} direction="vertical">
        {steps.map((step) => (
          <Steps.Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <Button onClick={handlePrevClick}>Prev Step</Button>
      <Button onClick={handleNextClick}>Next Step</Button>
    </>
  );
};

export default StepForm;
