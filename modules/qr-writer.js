// ======================================================
// Génération QR dynamique
// ======================================================

export async function generateQr(wrapper) {
    const text = JSON.stringify(wrapper);
    const qrContainer = document.getElementById("qrOutput");

    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text,
        width: 260,
        height: 260,
        correctLevel: QRCode.CorrectLevel.M
    });
}
