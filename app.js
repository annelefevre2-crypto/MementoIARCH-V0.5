// ======================================================
// app.js — Orchestrateur v0.4.3 (structure modulaire)
//
// Ne contient plus la logique brute : délègue aux modules
// ======================================================

// --- IMPORTS MODULES ---
import { readQrFromFile, readQrFromCamera } from "./modules/qr-reader.js";
import { generateQr } from "./modules/qr-writer.js";
import { decompressPayload, compressPayload } from "./modules/qr-compression.js";

import { FICHE_SCHEMA } from "./modules/fiche-schema.js";
import { buildFicheFromForm, buildPrompt } from "./modules/fiche-builder.js";

import { initCameraUI } from "./modules/ui-camera.js";
import { generateDynamicForm } from "./modules/ui-forms.js";

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let currentFiche = null;
let currentVariables = {};
let isCameraRunning = false;

// ======================================================
// INITIALISATION GENERALE
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("App v0.4.3 initialisée (structure modulaire)");

    // Chargement UI
    initCameraUI({
        onCameraScan: (text) => handleQrScanned(text),
        onStop: () => { isCameraRunning = false; }
    });

    // Onglet création fiche
    const typeSelect = document.getElementById("ficheType");
    if (typeSelect) {
        typeSelect.addEventListener("change", () => {
            const selected = typeSelect.value;
            if (FICHE_SCHEMA[selected]) {
                generateDynamicForm(FICHE_SCHEMA[selected], (values) => {
                    currentVariables = values;
                });
            }
        });
    }

    // Bouton générer QR
    const generateBtn = document.getElementById("generateQrBtn");
    if (generateBtn) {
        generateBtn.addEventListener("click", () => handleQrGeneration());
    }
});

// ======================================================
// FONCTIONS ORCHESTRATEUR
// ======================================================

async function handleQrScanned(text) {
    try {
        const json = decompressPayload(text);
        currentFiche = json;
        console.log("Fiche reconstruite :", json);

        const finalPrompt = buildPrompt(json);
        document.getElementById("compiledPrompt").value = finalPrompt;

    } catch (e) {
        console.error("Erreur décompression :", e);
        alert("Impossible de lire le QR (format incompatible ou corrompu).");
    }
}

async function handleQrGeneration() {
    try {
        const ficheJson = buildFicheFromForm(currentVariables);
        const compressed = compressPayload(ficheJson);
        await generateQr(compressed);
        alert("QR généré.");
    } catch (e) {
        console.error(e);
        alert("Erreur lors de la génération du QR.");
    }
}

