import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TableList({ onOpen, handleUpdate, searchTerm }) {
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

  const clientRows = tableData.map((client) => (
    <tr key={client.client_id}>
      <th>{client.client_id}</th>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.job}</td>
      <td>{client.rate}</td>
      <td>
        <button
          className={clsx("btn rounded-full w-20", {
            "btn-primary": client.isActive,
            "btn-error": !client.isActive,
          })}
        >
          {client.isActive ? "Active" : "Inactive"}
        </button>
      </td>
      <td>
        <button
          className="btn btn-secondary mr-[10px]"
          onClick={() => handleUpdate(client)}
        >
          Update
        </button>
        <button className="btn btn-accent">Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th className="w-[10%]">Status</th>
            </tr>
          </thead>
          <tbody className="hover">{clientRows}</tbody>
        </table>
      </div>
    </>
  );
}
