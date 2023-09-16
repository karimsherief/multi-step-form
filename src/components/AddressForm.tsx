import React from "react";
import FormWrapper from "./FormWrapper";
interface AddressData {
  street: string;
  city: string;
  state: string;
  zip: string;
}
interface AddressFormProps extends AddressData {
  updateFields: (e: Partial<AddressData>) => void;
}
function AddressForm({
  state,
  street,
  city,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        type="text"
        id="street"
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="zip">ZIP</label>
      <input
        type="number"
        id="zip"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}

export default AddressForm;
