import React, { useState } from "react";
import success from "../assets/checked.png";

export default function StepFour({ formData, handleSubmit, prevStep }) {
  const [error, setError] = useState("");

  const validateAndSubmit = () => {
    if (!formData.fullName.trim()) {
      setError("Full Name is required to complete onboarding.");
      return;
    }

    setError(""); // Clear error if validation passes
    handleSubmit();
  };

  return (
    <div>
      <div className="flex justify-center mb-2">
        <img src={success} className="size-10" />
      </div>

      <h2 className="text-xl text-center font-bold mb-2">
        {formData.fullName
          ? `Congratulations, ${formData.fullName}!`
          : "Congratulations!"}
      </h2>
      <p className="mb-4 text-base text-center opacity-55">
        {`    You have completed onboarding. You can start using ${formData.fullName}!`}
      </p>

      {/* Validation Message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Navigation Buttons */}
      <div className="flex justify-end">
        {" "}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-[#664de3] text-white px-4 py-2 rounded cursor-pointer"
          onClick={validateAndSubmit}
        >
          Finish
        </button>
      </div>
    </div>
  );
}
