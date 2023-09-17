import ts from "typescript";
import { writeFileSync, readdirSync, readFileSync } from "fs";

function importTS(filePath) {
  try {
    const fileContents = readFileSync(filePath, "utf8");
    const tsConfig = ts.transpileModule(fileContents, {});
    console.log(tsConfig);
    return tsConfig;
  } catch (error) {
    console.error("读取文件时出错：", error);
    return null;
  }
}

export default importTS;
