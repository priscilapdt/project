import fs from "fs";

export async function writeFile(data: {}, archiveName: string) {
  try {
    const fileData = fs.readFileSync(archiveName, "utf8") || "[]";
    const dataJson = JSON.parse(fileData);
    dataJson.push(data);
    fs.writeFileSync(archiveName, JSON.stringify(dataJson, null, 2));
  } catch (error) {
    return {
      error: true,
      message: "Failed to create file",
      thrownError: error,
    };
  }
  return {
    error: false,
    message: "File created",
  };
}

export async function readFile(archiveName: string) {
  try {
    const data = fs.readFileSync(archiveName, "utf8") || "[]";
    const dataJson = JSON.parse(data.toString());
    return {
      data: dataJson,
    };
  } catch (error) {
    return {
      error: true,
      message: "Failed to read file",
    };
  }
}
