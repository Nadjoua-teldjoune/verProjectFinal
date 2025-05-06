// server.js

const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

app.post("/run-parser", (req, res) => {
    const { tactic, trace } = req.body;

    if (!tactic || !trace) {
        return res.status(400).json({ error: "Tactique ou trace manquante." });
    }

    let parserCommand = "";

    switch (tactic) {
        case "Maintain Copies":
            parserCommand = "javac MaintainMultipleCopiesParser.java && java MaintainMultipleCopiesParser";
            break;
        case "Authorize User": 
            parserCommand = "javac AuthorizeUserTactic1.java && java AuthorizeUserTactic1";
            break;
        case "Maintain Confidentiality":
            parserCommand = "javac MaintainDataConfidentialityParser.java && java MaintainDataConfidentialityParser";
            break;
        case "Ping Echo":
            parserCommand = "javac PingEchoParser.java && java PingEchoParser";
            break;
        case "Onetime Password":
            parserCommand = "javac OneTimePasswordParser.java && java OneTimePasswordParser";
            break;
        case "ID/Password & Maintain Confidentiality":
            parserCommand = "javac TacticParser.java && java TacticParser";
            break;
        default:
            return res.status(400).json({ error: "Tactique inconnue." });
    }

    console.log(`Exécution de la commande : ${parserCommand}`);

    const process = exec(parserCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur d'exécution : ${stderr}`);
            return res.status(500).json({ error: stderr });
        }
        console.log(`Résultat du parser : ${stdout}`);
        res.json({ result: stdout });
    });

    // 🔹 Envoi de la trace au programme Java
    console.log("Trace envoyée :", trace);
    process.stdin.write(trace + "\n");
    process.stdin.end();
});
