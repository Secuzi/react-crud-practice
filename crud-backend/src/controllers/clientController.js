import * as clientService from "../services/clientServices";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    return res.status(200).json(clients);
  } catch (e) {
    console.error("Error fetching clients: ", e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
