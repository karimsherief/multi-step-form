import React from "react";
import FormWrapper from "./FormWrapper";
interface UserData {
  firstName: string;
  lastName: string;
  age: string;
}
interface UserFormProps extends UserData {
  updateFields: (e: Partial<UserData>) => void;
}
function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstName">First Name</label>
      <input
        autoFocus
        type="text"
        id="firstName"
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}

export default UserForm;
