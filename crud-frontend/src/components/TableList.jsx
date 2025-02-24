import clsx from "clsx";
const clients = [
  {
    client_id: 1,
    name: "John Doe",
    email: "jd@gmail.com",
    job: "Web Developer",
    rate: "100",
    isActive: true,
  },
  {
    client_id: 2,
    name: "Jane Doe",
    email: "jj@gmail.com",
    job: "Backend Developer",
    rate: "69",
    isActive: true,
  },
  {
    client_id: 3,
    name: "Doe Doe",
    email: "dd@gmail.com",
    job: "Fullstack Developer",
    rate: "100",
    isActive: false,
  },
];

export default function TableList({ onOpen, handleUpdate }) {
  const clientRows = clients.map((client) => (
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
