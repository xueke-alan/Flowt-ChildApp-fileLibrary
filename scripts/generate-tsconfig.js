import { writeFileSync, readdirSync } from "fs";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 获取提示src中可打包的文件
const microAppList = getSubdirectories("./src");
const validOptions = simplifyList(microAppList);
const echoString = generteEchoString(validOptions);
console.log(echoString);

main();

function main() {
  // 生成提示消息字符串

  rl.question(chalk(" >>> ") + " ", (answer) => {
    let microAppName = findMatchingKey(validOptions, answer.trim());
    if (microAppName) {
      rl.close();
      console.log(
        chalk.green(" Received microAppName: ") +
          ` ${microAppName}\n\n` +
          chalk.blue("> start to build\n ")
      );
      generteTsconfig(microAppName);
    } else {
      console.log(
        chalk.red(" Invalid input. ") +
          " Please choose from the provided options."
      );
      main();
    }
  });
}

function generteTsconfig(microAppName) {
  const tsconfig = {
    compilerOptions: {
      target: "es5",
      module: "commonjs",
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
        "@/*": [`src/${microAppName}/*`],
        "~/*": ["template/*"],
        "/#/*": ["types/*"],
        "vite/client": ["node_modules/@types/vite__client"],
      },
    },
    include: [
      "template/**/*.ts",
      "template/**/*.d.ts",
      "template/**/*.tsx",
      "template/**/*.vue",
      "src/**/*.ts",
      "src/**/*.d.ts",
      "src/**/*.tsx",
      "src/**/*.vue",
      "types/**/*.d.ts",
      "types/**/*.ts",
      "build/**/*.ts",
      "build/**/*.d.ts",
      "mock/**/*.ts",
      "components.d.ts",
      "vite.config.ts",
      "src/router/index.ts",
    ],
    exclude: ["node_modules", "dist", "**/*.js"],
    microAppName,
  };

  writeFileSync("tsconfig.json", JSON.stringify(tsconfig, null, 2));
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
