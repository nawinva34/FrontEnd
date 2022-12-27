import { Button, Steps } from "antd";

const StepForm = (props) => {
  // console.log(props);
  
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

  return (
    <>
      <div className="text-[#ffffff]">
        <Steps current={props.current} direction="vertical" size="large">
          {steps.map((step) => (
            <Steps.Step key={step.title} title={step.title} />
          ))}
        </Steps>
        {/* <Button onClick={handlePrevClick}>Prev Step</Button>
      <Button onClick={handleNextClick}>Next Step</Button> */}
      </div>
    </>
  );
};

export default StepForm;
