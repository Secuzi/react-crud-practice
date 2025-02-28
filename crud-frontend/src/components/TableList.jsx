import clsx from "clsx";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function TableList({
  handleUpdate,
  tableData,
  deleteClient,
  error,
}) {
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
        <button
          className="btn btn-accent"
          onClick={() => deleteClient(client.client_id)}
        >
          Delete
        </button>
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
