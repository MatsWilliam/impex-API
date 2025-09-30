import express from "express";
import dotenv from "dotenv";

import kunderRoutes from "./routes/kunderRoutes.js";
// Importera andra routes här

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/kunder", kunderRoutes);
// app.use("/api/varor", varorRoutes);
// app.use("/api/produktkategorier", produktkategorierRoutes);
// app.use("/api/bestallningar", bestallningarRoutes);
// app.use("/api/bestallningsrader", bestallningsraderRoutes);

export default app;
