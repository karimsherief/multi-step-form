import React from "react";
import FormWrapper from "./FormWrapper";

interface AccountData {
  email: string;
  password: string;
}
interface AccountFormProps extends AccountData {
  updateFields: (e: Partial<AccountData>) => void;
}
function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account">
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

export default AccountForm;
