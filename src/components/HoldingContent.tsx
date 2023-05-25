import { useState } from "react";
import HoldingForm from "./HoldingForm";
import Steps from "./Steps";

function HoldingContent() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <h1 className="mb-5">Holding Form</h1>
      <Steps currentStep={currentStep} />
      <HoldingForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </>
  );
}

export default HoldingContent;
