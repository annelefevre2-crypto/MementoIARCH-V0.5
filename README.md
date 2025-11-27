# Mémento Opérationnel IA – RCH  
Version : 0.4.3 (base stable)

Ce dépôt contient l’application Web permettant :

- la création de fiches opérationnelles RCH via formulaires dynamiques
- la compression et génération de QR codes (Pako + Base64)
- la lecture de QR codes (caméra + import fichier)
- la reconstruction automatique du JSON de fiche
- le lancement de prompts vers des IA externes (ChatGPT, Perplexity…)

## Structure du projet

```
/src
   index.html
   style.css
   app.js

/src/modules
   qr-reader.js        → Lecture QR (caméra + fichiers)
   qr-writer.js        → Génération QR dynamique
   qr-compression.js   → Compression / décompression Pako + wrapper
   fiche-schema.js     → Définition du format fiche compact
   fiche-builder.js    → Reconstruction JSON complet → prompt final
   ui-camera.js        → Gestion UI caméra et flux vidéo
   ui-forms.js         → Génération des formulaires dynamiques

/docs
   architecture.md     → Architecture technique de l’application
   qr-format.md        → Spécification QR compact / compressé
   variables-schema.md → Définition des champs variables
```

## Branches

- `main` → version stable certifiée  
- `dev` → évolutions en cours (toutes les PR vont dans `dev`)

## Version historique
- v0.4.3 → Base stable
- v0.5.0 → Migration modulaire (en cours)

---

## Contact
Ce projet est développé pour le cadre pédagogique ENSOSP / SDIS.

