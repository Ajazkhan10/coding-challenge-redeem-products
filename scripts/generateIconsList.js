const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../icons");
const iconsJsonPath = path.join(__dirname, "../constants/icons.json");

try {
  const iconFiles = fs
    .readdirSync(iconsDir)
    .filter((file) => file.endsWith(".svg"));

  if (iconFiles.length === 0) throw new Error("No icons to merge into sprite");

  const iconStrings = iconFiles.map((file) => path.basename(file, ".svg"));

  fs.writeFileSync(
    iconsJsonPath,
    JSON.stringify({ icons: iconStrings }, null, 2)
  );

  console.log("Icon list generated successfully.");
} catch (error) {
  console.error("Error generating icon list:", error);
}
