import { useState } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  //Header, values,

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
    }
  };

  //Next is get data if mode is edit otherwise leave it empty
  return (
    <>
      <header>
        <Navbar onOpen={() => handleOpen("add")} />
        <TableList handleOpen={handleOpen} />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmit}
          mode={modalMode}
        />
      </header>
    </>
  );
}
