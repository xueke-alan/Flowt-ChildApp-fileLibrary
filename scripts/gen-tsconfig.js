import { writeFileSync, readdirSync, readFileSync } from "fs";
import readline from "readline";
import chalk from "chalk";
import fs from "fs";

let rl;
const microAppList = getSubdirectories("./src");
const validOptions = simplifyList(microAppList);

// 获取传递给脚本的参数
const args = process.argv.slice(2);

switch (args[0]) {
  case "now":
    const text = fs.readFileSync("./tsconfig.json", "utf8");
    const microAppNameNow = JSON.parse(text);
    console.log(
      chalk.green(" Now microAppName: ") +
        `${microAppNameNow.microAppName} \n\n` +
        chalk.blue("> wait for next step.\n ")
    );
    break;

  default:
    // 获取提示src中可打包的文件
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const echoString = generteEchoString(validOptions);
    console.log(echoString);

    chooseMicroAppName();
    break;
}

function chooseMicroAppName() {
  // 生成提示消息字符串

  rl.question(" >>> " + " ", (answer) => {
    let microAppName = findMatchingKey(validOptions, answer.trim());
    if (microAppName) {
      rl.close();

      generte(microAppName);
      console.log(
        chalk.green(" Received microAppName: ") +
          ` ${microAppName}\n\n` +
          chalk.blue("> wait for next step.\n ")
      );
    } else {
      console.log(
        // 删除上面两行
        chalk.red(" Invalid input. ") +
          " Please choose from the provided options."
      );
      chooseMicroAppName();
    }
  });
}

function generte(microAppName) {
  generteTsconfig(microAppName);
  generteQiankunConfig(microAppName);
}

function generteTsconfig(microAppName) {
  const tsconfig = {
    compilerOptions: {
      target: "es2020",
      module: "es2020",
      moduleResolution: "node",
      strict: true,
      forceConsistentCasingInFileNames: true,
      allowSyntheticDefaultImports: true,
      strictFunctionTypes: false,
      jsx: "preserve",
      baseUrl: ".",
      allowJs: true,
      sourceMap: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      experimentalDecorators: true,
      lib: ["dom", "esnext"],
      typeRoots: ["./node_modules/@types/", "./types"],
      noImplicitAny: false,
      skipLibCheck: true,
      paths: {
        "!/*": ["./*"], // 根路径
        "~/*": ["template/*"], // 公共路径
        "/#/*": ["types/*"], // 类型路径
        "@/*": [`src/${microAppName}/*`], // 子应用业务路径
        "vite/client": ["node_modules/@types/vite__client"],
      },
    },
    include: [
      "template/**/*.ts",
      "template/**/*.d.ts",
      "template/**/*.tsx",
      "template/**/*.vue",
      `src/${microAppName}/**/*.ts`,
      `src/${microAppName}/**/*.d.ts`,
      `src/${microAppName}/**/*.tsx`,
      `src/${microAppName}/**/*.vue`,
      "types/**/*.d.ts",
      "types/**/*.ts",
      "build/**/*.ts",
      "build/**/*.d.ts",
      "mock/**/*.ts",
      "components.d.ts",
      "vite.config.ts",
    ],
    exclude: ["node_modules", "dist", "**/*.js"],
    microAppName,
  };

  writeFileSync("tsconfig.json", JSON.stringify(tsconfig, null, 2));
}

function generteQiankunConfig(microAppName) {
  // 使用fs.readFile异步方法来读取JSON文件
  const jsonFilePath = `./src/${microAppName}/qiankun.config.json`;
  const outPath = "./public/qiankun.config.json";
  try {
    const fileContent = readFileSync(jsonFilePath, "utf-8");
    const jsonObject = {
      name: `flowt_micro_${microAppName}`,
      baseUrl: microAppName,
      ...JSON.parse(fileContent),
    };
    // 写入新的JSON文件
    writeFileSync(outPath, JSON.stringify(jsonObject, null, 2));
  } catch (err) {
    // 处理读取和解析错误
    console.error(err);
  }
}

function getSubdirectories(srcFolder) {
  try {
    const subdirectories = readdirSync(srcFolder, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    return subdirectories;
  } catch (error) {
    console.error(`Error reading subdirectories from ${srcFolder}: ${error}`);
    return [];
  }
}

function simplifyList(inputList) {
  const simplifiedList = [];
  const usedShortNames = new Set();

  for (const item of inputList) {
    let shortName = item[0].toLowerCase();
    let i = 2;

    while (usedShortNames.has(shortName)) {
      shortName = item.substring(0, i).toLowerCase();
      i++;
    }

    usedShortNames.add(shortName);
    simplifiedList.push({
      microAppName: item,
      shortName: shortName,
    });
  }
  return simplifiedList;
}

function findMatchingKey(list, valueToFind) {
  for (const item of list) {
    if (item.microAppName === valueToFind || item.shortName === valueToFind) {
      return item.microAppName;
    }
  }
  return null;
}

function generteEchoString(validOptions) {
  // 计算最长的 microAppName 长度
  const padLength = Math.max(
    ...validOptions.map((item) => item.microAppName.length),
    "000. microAppName"
  );

  let echoString = chalk.blue("> Please choose a microAppName:\n");
  echoString += chalk.gray(
    `${" microAppName".padEnd(padLength)}\t | for short\n`
  );
  validOptions.forEach(({ microAppName, shortName }, index) => {
    echoString += chalk.yellow(` ${index + 1}. `);
    echoString += chalk.yellow(`${microAppName.padEnd(padLength)}`);
    echoString += chalk.yellow(`\t | ${shortName}\n`);
  });
  return echoString;
}
