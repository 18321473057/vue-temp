// import {msgc,obj,muInfo} from "./js导出";
// console.log(obj.objName);
// console.log(msgc);
// console.log(muInfo.getINFo());

import * as ep from "./js导出.js";
console.log(ep.obj.objName);
console.log(ep.msgc);
console.log(new ep.muInfo().getINFo());

var sum =(a,b)=>{
  return a+b;
}

var abs =(a,b)=>{
  return a-b;
}

export {sum,abs};