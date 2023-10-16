console.log(1);

import { copyFolderSync } from "./build-new-app.js";
// 用法示例
const sourceFolder = "./scripts/create/Template";
const targetFolder = "./src/test";

copyFolderSync(sourceFolder, targetFolder);
