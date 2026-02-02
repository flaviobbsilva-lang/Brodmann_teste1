// scripts/ensure-css-interop-cache.js
const fs = require("fs");
const path = require("path");

function ensureFile(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "/* generated for CI */\n", "utf8");
  }
}

try {
  const target = path.join(
    process.cwd(),
    "node_modules",
    "react-native-css-interop",
    ".cache",
    "web.css"
  );

  ensureFile(target);
  console.log("✅ Ensured react-native-css-interop cache:", target);
} catch (e) {
  console.warn("⚠️ Could not ensure css-interop cache:", e?.message || e);
  // Não derruba o build só por isso
}
