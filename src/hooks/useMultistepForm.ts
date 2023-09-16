import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    function next() {
        setCurrentStepIndex(prev => prev == steps.length - 1 ? prev : prev + 1)
    }
    function back() {
        setCurrentStepIndex(prev => prev > 0 ? prev - 1 : prev)
    }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        next,
        back,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1
    }
}