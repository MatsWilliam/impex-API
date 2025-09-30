import { pool } from "../config/db.js";

export async function getAllKunder() {
  const [rows] = await pool.query("SELECT * FROM kunder");
  return rows;
}

export async function getKundById(id: number) {
  const [rows] = await pool.query("SELECT * FROM kunder WHERE id = ?", [id]);
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}
