import { useState, useEffect } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import axios from "axios";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (searchTerm) {
          res = await axios.get(
            `http://localhost:3000/api/clients/search?q=${searchTerm}`
          );
        } else {
          res = await axios.get(`http://localhost:3000/api/clients/`);
        }
        setTableData(res.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  async function deleteClient(id) {
    const test = window.confirm("Are you sure you want to delete?");
    if (test) {
      await axios.delete(`http://localhost:3000/api/clients/${id}`);
      setTableData((prevData) =>
        prevData.filter((client) => client.client_id !== id)
      );
    }
  }

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      console.log("IN ADD: ", newClientData);

      const response = await axios.post(
        "http://localhost:3000/api/clients/",
        newClientData
      );
      setTableData((prevData) => [...prevData, response.data]);
    } else {
      const selected_id = selectedClient.client_id;
      console.log("New client data: ", newClientData);
      const response = await axios.put(
        `http://localhost:3000/api/clients/${selected_id}`,
        newClientData
      );

      setTableData((prevData) =>
        prevData.map((data) =>
          data.client_id === selected_id ? response.data : data
        )
      );
    }
  };

  const handleUpdate = (client) => {
    setSelectedClient(client);
    handleOpen("edit");
  };

  const searchClient = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleClose = () => {
    setSelectedClient(null);
    setIsOpen(false);
  };

  //Next is get data if mode is edit otherwise leave it empty
  return (
    <>
      <header>
        <Navbar onOpen={() => handleOpen("add")} onSearch={searchClient} />
        <TableList
          handleUpdate={handleUpdate}
          searchTerm={searchTerm}
          tableData={tableData}
          error={error}
          deleteClient={deleteClient}
        />
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
