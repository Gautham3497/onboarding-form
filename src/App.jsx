import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import EntriesTable from "./components/EntriesTable";
import StepProgress from "./components/StepProgress";

export default function App() {
  const [step, setStep] = useState(1);
  const [entries, setEntries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    usageType: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (!formData.fullName || !formData.workspaceName) {
      alert("Please fill in all required fields before finishing.");
      return;
    }

    if (editingIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editingIndex] = formData;
      setEntries(updatedEntries);
      setEditingIndex(null);
    } else {
      setEntries([...entries, formData]);
    }

    setFormData({
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceURL: "",
      usageType: "",
    });

    alert("Onboarding completed! Entry saved successfully.");
    setStep(1);
  };

  // Animation
  const variants = {
    hidden: { opacity: 0, x: 50 }, // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }, // Slide out to the left
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <StepProgress step={step} />
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md ">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <StepOne
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
              />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step3"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <StepThree
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div
              key="step4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              <StepFour
                formData={formData}
                handleSubmit={handleSubmit}
                prevStep={prevStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <EntriesTable
        entries={entries}
        setEntries={setEntries}
        setFormData={setFormData}
        setStep={setStep}
        setEditingIndex={setEditingIndex}
      />
    </div>
  );
}
