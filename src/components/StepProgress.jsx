import React from "react";

export default function StepProgress({ step }) {
  const steps = [1, 2, 3, 4];

  // Ensure step is within valid range (1 to 4)
  const currentStep = steps.includes(step) ? step : 1;

  return (
    <div className="flex items-center justify-center mb-6">
      {steps.map((num, index) => (
        <div key={num} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full font-bold 
            ${
              currentStep >= num
                ? "bg-[#664de3] text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {num}
          </div>

          {/* Connecting Line (Skip Last Step) */}
          {index < steps.length - 1 && (
            <div
              className={`w-10 h-1 ${
                currentStep > num ? "bg-[#664de3]" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
