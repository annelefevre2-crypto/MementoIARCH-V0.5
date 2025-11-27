// ======================================================
// Reconstruction JSON + prompt final (v0.4.3)
// ======================================================

export function buildFicheFromForm(values) {
    return {
        meta: {
            version: "0.4.3",
            timestamp: Date.now()
        },
        variables: values
    };
}

export function buildPrompt(json) {
    const vars = json.variables || {};

    return `
Tu es assistant RCH4.

Analyse le produit :
- Code ONU : ${vars.onu || "?"}
- Code danger ADR : ${vars.adr || "?"}
- Nom : ${vars.nom || "?"}
- CAS : ${vars.cas || "?"}

Détaille :
- Risques
- Dangers
- Toxicologie
- Conseils de sauvegarde
- Sources officielles
`;
}
