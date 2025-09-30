import { Request, Response } from "express";
import * as kunderService from "../services/kunderService.js";

export async function getKunder(req: Request, res: Response) {
  try {
    const kunder = await kunderService.getAllKunder();
    res.json(kunder);
  } catch (error) {
    res.status(500).json({ error: "Kunde inte hämta kunder" });
  }
}

export async function getKund(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const kund = await kunderService.getKundById(id);
    if (!kund) {
      return res.status(404).json({ error: "Kund hittades inte" });
    }
    res.json(kund);
  } catch (error) {
    res.status(500).json({ error: "Fel vid hämtning av kund" });
  }
}
