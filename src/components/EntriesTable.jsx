export default function EntriesTable({
  entries,
  setEntries,
  setFormData,
  setStep,
  setEditingIndex,
}) {
  const handleEdit = (index) => {
    setFormData(entries[index]); // Set form data to selected entry
    setEditingIndex(index); // Store the editing index
    setStep(1); // Go back to step 1 for editing
  };

  const handleDelete = (index) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="mt-6 w-full max-w-lg bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Entries</h2>

      {entries.length === 0 ? (
        <p className="text-gray-500 text-center">No entries yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Full Name</th>
              <th className="border border-gray-300 px-4 py-2">Workspace</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {entry.fullName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.workspaceName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:underline mx-2 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline mx-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
