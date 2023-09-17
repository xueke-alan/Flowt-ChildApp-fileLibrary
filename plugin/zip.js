// 打包dist目录下的微应用服务
import fs from "fs";
import path from "path";
import archiver from "archiver";
import chalk from "chalk";
export default function zipDist(microAppName) {
  return {
    name: "hello-vite-plugin",
    // 在构建结束后，执行你的操作
    async closeBundle() {
      if (process.env.NODE_ENV === "production") {
        await zip(microAppName);
      }
    },
  };
}

function zip(microAppName) {
  return new Promise((resolve, reject) => {
    const folderToZip = `./dist/${microAppName}`;
    const folderName = path.basename(folderToZip);
    const zipFilePath = path.join(
      path.dirname(folderToZip),
      `${folderName}.zip`
    );
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    archive.pipe(output);
    archive.directory(folderToZip, false);

    archive.finalize();

    output.on("close", () => {
      // 获取实际的压缩包大小
      const stats = fs.statSync(zipFilePath);
      const fileSizeInBytes = stats.size;

      console.log(chalk.green(`✓ zip to ${formatFileSize(fileSizeInBytes)}`));
      resolve(zipFilePath); // 打包成功时解析Promise
    });

    output.on("error", (err) => {
      console.error("/U+00d7 zipping error", err);
      reject(err); // 打包出错时拒绝Promise
    });
  });
}

function formatFileSize(sizeInBytes) {
  const kiloBytes = sizeInBytes / 1024;
  const megaBytes = kiloBytes / 1024;

  if (megaBytes >= 1) {
    return `${megaBytes.toFixed(2)} MB`;
  } else {
    return `${kiloBytes.toFixed(2)} KB`;
  }
}
