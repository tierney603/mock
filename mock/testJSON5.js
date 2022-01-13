const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
//读取json文件
function getJsonFile(filePath) {
    //读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    //解析并返回
    return JSON5.parse(json);
}
var json = getJsonFile('./userInfo.json5');
console.log('json', json) 
