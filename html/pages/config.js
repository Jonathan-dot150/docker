// config.js
let cache = null; 

export async function getConfig(name) {
    if (!cache) {
        cache = await fetch("/config").then(r => r.json()); // On charge 1 fois
    }
    return cache[name]; // On renvoie seulement la variable demandée
}
