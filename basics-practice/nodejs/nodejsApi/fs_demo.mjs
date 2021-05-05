import fs from "fs/promises";

// const filePath = "D:/迅雷下载/pycharm-community-2020.3.2.exe.td.torrent";
const filePath = "C:/Users/fwl19/Desktop/3305华数.txt";
// const rs = fs.createReadStream(filePath);
// console.log(rs);

// 像 go 一样处理异步错误
const unity = promise => {
  return promise.then(res => [null, res]).catch(err => [err]);
};

const [err, res] = await unity(fs.readFile(filePath, { flag: "r" }));
if (err !== null) {
  console.log(err);
} else {
  console.log(res.toString());
}
