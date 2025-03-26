import React, { useState } from "react";

export default function StepOne({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({ fullName: "", displayName: "" });

  const validateAndProceed = () => {
    let newErrors = { fullName: "", displayName: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.displayName.trim()) {
      newErrors.displayName = "Display Name is required.";
    }

    setErrors(newErrors);

    // Proceed only if there are no errors
    if (!newErrors.fullName && !newErrors.displayName) {
      nextStep();
    }
  };

  return (
    <div>
      <p className="text-xl tracking-wide text-center font-medium mb-2 ">
        Welcome! First things first...
      </p>
      <p className="mb-5 text-base text-center opacity-35">
        You can always change the better
      </p>

      {/* Full Name Input */}
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        // placeholder="Full Name"
        className="border-[0.5px] p-2 w-full mb-2 rounded-md"
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName:
              e.target.value.charAt(0).toUpperCase() +
              e.target.value.slice(1).toLowerCase(),
          })
        }
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm">{errors.fullName}</p>
      )}

      {/* Display Name Input */}
      <label htmlFor="displayName">Display Name</label>

      <input
        type="text"
        // placeholder="Display Name"
        className="border-[0.5px] p-2 w-full mb-2 rounded-md"
        value={formData.displayName}
        onChange={(e) =>
          setFormData({ ...formData, displayName: e.target.value })
        }
      />
      {errors.displayName && (
        <p className="text-red-500 text-sm">{errors.displayName}</p>
      )}

      {/* Next Button */}
      <div className="flex justify-end mt-4">
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
