import { useState } from "react";

interface HoldingFormProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const HoldingForm = ({ currentStep, setCurrentStep }: HoldingFormProps) => {
  const [buyer, setBuyer] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form submission logic here
    console.log("Form submitted:", {
      buyer,
      firstName,
      middleName,
      lastName,
      mobileNumber,
    });

    // Reset form fields
    setBuyer("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setMobileNumber("");
  };

  return (
    <div className="mx-auto mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <h2>Buyer's Information</h2>

        <select
          value={buyer}
          onChange={(e) => setBuyer(e.target.value)}
          className="px-2 py-4 w-[95%] mx-auto"
        >
          <option value="" disabled>
            Select Buyer
          </option>
          <option value="buyer1">Buyer 1</option>
          <option value="buyer2">Buyer 2</option>
          <option value="buyer3">Buyer 3</option>
        </select>

        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Middlename"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white w-[95%] py-2 rounded mt-2 hover:bg-[#333] mx-auto"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default HoldingForm;
