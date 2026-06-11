const DB_NAME = "craft-gallery-db";
const STORE_WORKS = "works";
const STORE_VIEW_HISTORY = "viewHistory";
function openDb() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 2);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains(STORE_WORKS)) {
                db.createObjectStore(STORE_WORKS, { keyPath: "id" });
            }
            if (!db.objectStoreNames.contains(STORE_VIEW_HISTORY)) {
                db.createObjectStore(STORE_VIEW_HISTORY, { keyPath: "id" });
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}
export async function readWorks() {
    const db = await openDb();
    return new Promise((resolve) => {
        const req = db.transaction(STORE_WORKS).objectStore(STORE_WORKS).getAll();
        req.onsuccess = () => resolve(req.result);
    });
}
export async function writeWorks(works) {
    const db = await openDb();
    const tx = db.transaction(STORE_WORKS, "readwrite");
    tx.objectStore(STORE_WORKS).clear();
    works.forEach((work) => tx.objectStore(STORE_WORKS).put(work));
}
export async function readViewHistory() {
    const db = await openDb();
    return new Promise((resolve) => {
        const req = db.transaction(STORE_VIEW_HISTORY).objectStore(STORE_VIEW_HISTORY).getAll();
        req.onsuccess = () => resolve(req.result);
    });
}
export async function writeViewHistory(history) {
    const db = await openDb();
    const tx = db.transaction(STORE_VIEW_HISTORY, "readwrite");
    tx.objectStore(STORE_VIEW_HISTORY).clear();
    history.forEach((item) => tx.objectStore(STORE_VIEW_HISTORY).put(item));
}
//# sourceMappingURL=indexedDb.js.map