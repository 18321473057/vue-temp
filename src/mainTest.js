console.log("webPack打包命令演示:::");
console.log("webPack打包命令演示:::");
console.log("webPack打包命令演示:::");
console.log("命令如下");
console.log("------------------------");

console.log("webpack ./src/main.js -o ./dist");
console.log("------------------------");

const cjs = require("./js/wpackCommonJs");
console.log("commonjs 可以支持:::");
console.log(cjs.commonJs_msg);

import {es_msg} from "./js/wpackES6";
console.log("es6规范也支持:::");
console.log(es_msg);

//npm install less-loader@7.3.0 --save-dev   版本过高发生错误
// Module build failed (from ./node_modules/less-loader/dist/cjs.js):
// TypeError: this.getOptions is not a function

require("./css/test.less")
require("./css/normal.css")


