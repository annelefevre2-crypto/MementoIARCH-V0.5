// ======================================================
// Lecture QR : fichier + caméra (version stable 0.4.3)
// ======================================================

export async function readQrFromFile(file, callback) {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const result = await QrScanner.scanImage(e.target.result);
        callback(result);
    };
    reader.readAsDataURL(file);
}

export function readQrFromCamera(videoEl, callback) {
    const scanner = new QrScanner(videoEl, (res) => {
        callback(res);
    });
    scanner.start();
    return scanner;
}
