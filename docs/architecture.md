# Architecture technique

## 1. Objectif
Application Web permettant la création/lecture de fiches RCH via QR codes compressés.

## 2. Structure
Voir README.

## 3. Cycle QR
1. JSON fiche →  
2. compression DEFLATE via Pako →  
3. Base64 →  
4. wrapper `{z, d}` →  
5. QR  
6. Lecture → décompression → reconstruction JSON

## 4. Modules
- qr-reader : lecture caméra/fichier
- qr-writer : génération QR
- qr-compression : compression/décompression
- fiche-schema : définition des champs
- fiche-builder : reconstruction + prompt
- ui-camera : gestion caméra
- ui-forms : gestion des champs dynamiques

