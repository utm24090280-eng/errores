import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/comentario.controller.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
    .then(() => console.log("Conexión exitosa a la base de datos"))
    .catch((error) => console.error("Error al conectar a la base de datos:", error));

const app = express();
app.use(cors());
app.listen(4000,  () => console.log("funciona el servidor"))

test();