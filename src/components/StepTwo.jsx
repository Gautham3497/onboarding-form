import React, { useState } from "react";

export default function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [error, setError] = useState("");

  const validateAndProceed = () => {
    if (!formData.workspaceName.trim()) {
      setError("Workspace Name is required.");
      return;
    }

    setError(""); // Clear error if validation passes
    nextStep();
  };

  return (
    <div>
      <p className="text-xl text-center tracking-wide font-medium mb-2">
        Let's set up a home for all work
      </p>
      <p className="text-center text-sm opacity-35 tracking-tight mb-4">
        You can always create another workspace later
      </p>

      {/* Workspace Name Input */}
      <input
        type="text"
        placeholder="Workspace Name"
        className="border-[0.5px] p-2 w-full mb-3 rounded-md"
        value={formData.workspaceName}
        onChange={(e) =>
          setFormData({ ...formData, workspaceName: e.target.value })
        }
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Workspace URL Input (Optional) */}
      <input
        type="text"
        placeholder="Workspace URL (Optional)"
        className="border-[0.5px] p-2 w-full mb-4 rounded-md"
        value={formData.workspaceURL}
        onChange={(e) =>
          setFormData({ ...formData, workspaceURL: e.target.value })
        }
      />

      {/* Navigation Buttons */}
      <div className="flex justify-end">
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
