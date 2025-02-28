import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    return res.status(200).json(clients);
  } catch (e) {
    console.error("Error fetching clients: ", e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const createClient = async (req, res) => {
  try {
    const { name, email, job, rate, isActive } = req.body;
    const newClient = await clientService.createClient({
      name,
      email,
      job,
      rate,
      isActive,
    });

    return res.status(201).json(newClient);
  } catch (e) {
    console.error("Error creating client: ", e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { name, email, job, rate, isActive } = req.body;
    const { id } = req.params;

    const updatedClient = await clientService.updateClient(
      {
        name,
        email,
        job,
        rate,
        isActive,
      },
      id
    );

    if (!updateClient) {
      return res.json(404).json({ message: "Client not found" });
    }

    return res.status(200).json(updatedClient);
  } catch (e) {
    console.error("Error updating client: ", e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const isClientDeleted = await clientService.deleteClient(id);

    if (isClientDeleted) {
      return res.status(200).json({ message: "Client has been deleted" });
    }
    return res.status(404).json({ message: "Client not deleted" });
  } catch (error) {
    console.log("Error deleting client: ", error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
