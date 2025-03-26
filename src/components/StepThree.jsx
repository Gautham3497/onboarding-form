import React, { useState } from "react";
import solo from "../assets/me.png";
import team from "../assets/team.png";

export default function StepThree({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [error, setError] = useState("");

  const validateAndProceed = () => {
    if (!formData.usageType) {
      setError("Please select an option before proceeding.");
      return;
    }

    setError(""); // Clear error if validation passes
    nextStep();
  };

  return (
    <div>
      <p className="text-xl text-center tracking-wide font-medium mb-2">
        How are you planning to use Eden?
      </p>
      <p className="text-center text-sm opacity-35 tracking-tight mb-5">
        We'll streamline your setup experience accordingly
      </p>

      {/* Usage Type Selection */}
      <div className="flex items-center justify-center gap-3">
        <button
          className={`p-2 border cursor-pointer rounded-lg ${
            formData.usageType === "Personal"
              ? "bg-[#664de3] text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setFormData({ ...formData, usageType: "Personal" })}
        >
          <div className="flex flex-col items-baseline">
            <img className="size-6 mb-3" src={solo} alt="solo" />
            <p className="text-base font-semibold mb-2">For Myself</p>
            <p className="text-sm text-start opacity-40 tracking-tight">
              Write better.Think more clearly.Stay organized
            </p>
          </div>
        </button>

        <button
          className={`p-2 border cursor-pointer rounded-lg ${
            formData.usageType === "Team"
              ? "bg-[#664de3] text-white"
              : "bg-gray-100"
          }`}
          onClick={() => setFormData({ ...formData, usageType: "Team" })}
        >
          <div className="flex flex-col items-baseline">
            <img className="size-6 mb-3" src={team} alt="solo" />
            <p className="text-base font-semibold mb-2">With my team</p>
            <p className="text-sm text-start opacity-40 tracking-tight">
              Wikis,docs,tasks &projects,all in one place.
            </p>
          </div>
        </button>
      </div>

      {/* Validation Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Navigation Buttons */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-[#664de3] text-white px-4 py-2 rounded cursor-pointer"
          onClick={validateAndProceed}
        >
          Next
        </button>
      </div>
    </div>
  );
}
