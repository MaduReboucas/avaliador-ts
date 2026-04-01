import { useState } from "react";
import type { ReactElement, SyntheticEvent } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: SyntheticEvent) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    steps,
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep + 1 === steps.length ? true : false,
  };
}
