import { query } from "../db.js";

export const getClients = async () => {
  const { rows } = await query("SELECT * FROM clients_tb");
  return rows;
};
export const createClient = async (clientData) => {
  const { name, email, job, rate, isActive } = clientData;
  const { rows } = await query(
    `INSERT INTO clients_tb (name, email, job, rate, isActive)
    VALUES($1, $2, $3, $4, $5) RETURNING *
    `,
    [name, email, job, rate, isActive]
  );
  console.log(rows);
  return rows[0];
};

export const updateClient = async (clientData, clientId) => {
  const { name, email, job, rate, isActive } = clientData;
  const { rows } = await query(
    `UPDATE clients_tb SET name = $1, email = $2, job = $3, rate = $4, isActive = $5
    WHERE id = $6 RETURNING *
    `,
    [name, email, job, rate, isActive, clientId]
  );
  return rows[0];
};

export const deleteClient = async (clientId) => {
  const { rowCount } = await query(
    `
      DELETE FROM clients WHERE id = $1  
    `,
    [clientId]
  );
  return rowCount > 0;
};
