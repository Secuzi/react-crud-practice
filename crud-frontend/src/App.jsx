import { useState } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedClient, setSelectedClient] = useState(null);
  //Header, values,

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    if (modalMode === "add") {
      const test = {
        name: e.get("name"),
        email: e.get("email"),
      };
      console.log(test);
    } else {
      console.log("modal mode edit");
    }
  };

  const handleUpdate = (client) => {
    setSelectedClient(client);
    handleOpen("edit");
  };

  const handleClose = () => {
    setSelectedClient(null);
    setIsOpen(false);
  };

  //Next is get data if mode is edit otherwise leave it empty
  return (
    <>
      <header>
        <Navbar onOpen={() => handleOpen("add")} />
        <TableList handleUpdate={handleUpdate} />
        <ModalForm
          isOpen={isOpen}
          onClose={handleClose}
          onSubmit={handleSubmit}
          mode={modalMode}
          clientData={selectedClient}
        />
      </header>
    </>
  );
}
