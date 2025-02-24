import { useState } from "react";
import { useEffect } from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  onSubmit,
  clientData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
    rate: 0,
    isActive: true,
  });
  console.log("Form data: ", formData);
  console.log("Client data: ", clientData);
  // Sync formData with clientData when clientData changes
  useEffect(() => {
    console.log("in use effect");
    if (clientData) {
      setFormData(clientData); // Update formData with clientData
    } else {
      // Reset to default values if clientData is null
      setFormData({
        name: "",
        email: "",
        job: "",
        rate: 0,
        isActive: true,
      });
    }
  }, [clientData]); // Run this effect whenever clientData changes

  function onChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-8">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            Name:
            <input
              type="text"
              className="grow"
              placeholder="e.g John Doe"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            Email:
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="john@gmail.com"
              onChange={onChange}
              value={formData.email}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-4">
            Job:
            <input
              type="text"
              name="job"
              value={formData.job}
              className="grow"
              placeholder="e.g astronaut"
              onChange={onChange}
            />
          </label>

          <div className="flex gap-3 mb-4">
            <label className="input input-bordered flex items-center gap-2">
              Rate
              <input
                type="number"
                name="rate"
                value={formData.rate}
                className="grow"
                placeholder="Daisy"
                min={0}
                onChange={onChange}
              />
            </label>

            <select
              className="select select-bordered w-full max-w-xs"
              name="isActive"
              value={formData.isActive}
              onChange={onChange}
            >
              <option value={true} defaultChecked>
                Active
              </option>
              <option value={false}>Inactive</option>
            </select>
          </div>

          <button className="btn btn-success">
            {mode === "edit" ? "Save changes" : "Add client"}
          </button>
        </div>
      </dialog>
    </>
  );
}
