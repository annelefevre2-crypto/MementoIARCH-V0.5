// ======================================================
// Compression / décompression Pako + wrapper
// Version identique v0.4.3
// ======================================================

export function compressPayload(jsonObj) {
    const str = JSON.stringify(jsonObj);
    const deflated = pako.deflate(str, { level: 6 });
    const b64 = btoa(String.fromCharCode(...deflated));
    return { z: "pako-base64-v1", d: b64 };
}

export function decompressPayload(wrapper) {
    let raw;

    if (typeof wrapper === "string") {
        raw = wrapper;
    } else if (wrapper.d) {
        raw = wrapper.d;
    } else {
        throw new Error("Format QR non reconnu");
    }

    const binary = atob(raw);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    const inflated = pako.inflate(bytes, { to: "string" });

    return JSON.parse(inflated);
}
