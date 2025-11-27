// ======================================================
// Gestion de l'UI caméra (v0.4.3)
// ======================================================

export function initCameraUI({ onCameraScan, onStop }) {

    const videoEl = document.getElementById("camera");
    const btnStart = document.getElementById("cameraBtn");
    const btnStop = document.getElementById("stopCameraBtn");

    let scanner = null;

    if (!videoEl || !btnStart) return;

    btnStart.onclick = async () => {
        scanner = new QrScanner(videoEl, (res) => onCameraScan(res));
        await scanner.start();
    };

    if (btnStop) {
        btnStop.onclick = () => {
            if (scanner) scanner.stop();
            onStop();
        };
    }
}
