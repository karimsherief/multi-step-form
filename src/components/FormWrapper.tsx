import React from "react";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
}
function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <>
      <h2>{title}</h2>
      <div className="children">{children}</div>
    </>
  );
}

export default FormWrapper;
