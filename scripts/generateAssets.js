// generateAssets.js (Node.js script)
import fs from "fs";
import path from "path";

const assetsDir = "./src/assets"; // Your main assets directory
const outputFile = "./src/assets.js"; // Where to create assets.js
const importStatements = [];
const exportProperties = [];

function scanDir(dir, baseDir = assetsDir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      scanDir(fullPath, baseDir); // Recursive call
    } else {
      // Calculate import path RELATIVE to the outputFile's directory
      let relativePath = path
        .relative(path.dirname(outputFile), fullPath)
        .replace(/\\/g, "/");

      // Ensure "./" for same-directory imports
      if (!relativePath.startsWith("../") && !relativePath.startsWith("/")) {
        relativePath = "./" + relativePath;
      }

      const assetName = path
        .basename(file, path.extname(file))
        .replace(/[^a-zA-Z0-9_]/g, "_");

      if (
        !importStatements.some((statement) =>
          statement.includes(`import ${assetName} from '${relativePath}'`)
        )
      ) {
        importStatements.push(`import ${assetName} from '${relativePath}';`);
      }
      exportProperties.push(`  ${assetName},`);
    }
  });
}

scanDir(assetsDir);

const fileContent = `
${importStatements.join("\n")}

export const assets = {
${exportProperties.join("\n")}
};
`;

fs.writeFileSync(outputFile, fileContent);
console.log("assets.js generated successfully!");
