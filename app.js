// Entrada de compatibilidad: el navegador o caché puede solicitar `/app.js`.
// Reexportamos/importamos el módulo real en `src/app.js` para evitar 404.
import './src/app.js';
