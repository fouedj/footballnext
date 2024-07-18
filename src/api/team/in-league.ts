import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { league } = req.query;

  try {
    const response = await axios.get<Team[]>(`http://localhost:3000/api`, {
      params: { league },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: "Error fetching data" });
  }
};
