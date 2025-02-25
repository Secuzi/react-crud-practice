import { query } from "../db";

export const getClients = async () => {
  const [rows] = await query("SELECT * FROM clients_tb");
  return rows;
};
