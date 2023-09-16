import React, { FormEvent, useState } from "react";
import { AccountForm, AddressForm, UserForm } from "./components";
import useMultistepForm from "./hooks/useMultistepForm";

interface DataProps {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}
const INTIAL_DATA: DataProps = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INTIAL_DATA);
  const { currentStepIndex, steps, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    isLastStep ? alert("done") : next();
  }
  function updateFields(fields: Partial<DataProps>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <span className="steps">
        {currentStepIndex + 1} / {steps.length}
      </span>
      {step}
      <div className="btns">
        {!isFirstStep && (
          <button onClick={back} type="button">
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
      </div>
    </form>
  );
}

export default App;
