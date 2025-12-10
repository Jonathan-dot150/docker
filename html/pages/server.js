import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

// Sert ton fichier HTML
app.use(express.static(".")); // sert index.html automatiquement

// Route sécurisée renvoyant uniquement ce que tu choisis
app.get("/config", (req, res) => {
    res.json({
        UNSPLASH_TOKEN: process.env.UNSPLASH_TOKEN,
        API_OPENAI: process.env.API_OPENAI
    });
});

app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000"));
