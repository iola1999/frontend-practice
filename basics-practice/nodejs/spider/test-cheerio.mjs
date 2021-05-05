// import fs from "fs/promises";
import request from "request-promise";

import cheerio from "cheerio";

const result = await request.get("https://hu60.cn/q.php/index.index.html");
// console.log(result);

let $ = cheerio.load(result);
const topicList = $("ul > li");
console.log(topicList.length);
// 这也太原始了。可能用法不太对
topicList.each(function (i) {
  console.log($(topicList[i]).find("a").text());
});
