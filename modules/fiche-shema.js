// ======================================================
// Schéma des fiches (extrait version 0.4.3)
// ======================================================

export const FICHE_SCHEMA = {
    "analyse-produit": {
        title: "Analyse produit",
        variables: [
            { id: "onu", label: "Code ONU", type: "text", required: false },
            { id: "adr", label: "Code danger ADR", type: "text", required: false },
            { id: "nom", label: "Nom du produit", type: "text", required: false },
            { id: "cas", label: "N° CAS", type: "text", required: false }
        ]
    }
};
