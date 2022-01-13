// const fs = require('fs');
// const path = require('path');
// const Mock = require('mockjs');//mockjs 导入依赖模块
// const JSON5 = require('json5');
// //读取json文件
// function getJsonFile(filePath) {
//     //读取指定json文件
//     var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
//     //解析并返回
//     return JSON5.parse(json);
// }

// //返回一个函数
// module.exports = function (app) {
//     if (process.env.MOCK == 'true') {
//         //监听http请求
//         app.get('/user/userinfo', function (rep, res) {
//             //每次响应请求时读取mock data的json文件
//             //getJsonFile方法定义了如何读取json文件并解析成数据对象
//             var json = getJsonFile('./userInfo.json5');
//             //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
//             res.json(Mock.mock(json));
//         });
//     }
// }

import Mock from 'mockjs'
const Random = Mock.Random;

function getData() {
    let datalist = [];
    for (let i = 0; i < 10; i++) {
        let newData = {
            order: Random.natural(16),
            account: Random.name(),
            time: Random.now(),
            title: Random.csentence(4), //  Random.csentence( min, max )
            baoxiu: Random.csentence(2),
            product: Random.csentence(4, 10),
            number: Random.natural(1, 100),
            price: Random.float(20, 500, 2, 2),
            addrss: Random.csentence(15, 30),
            name: Random.cname(),
            tel: Random.natural(11),
            state: Random.csentence(5),
            id: Random.natural(1, 5),
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        datalist.push(newData)
    }
    return {
        data: datalist
    }
}

function setMsg() {
    let datalist = [];
    for (let i = 0; i < 10; i++) {
        let newData = {
            order: Random.natural(16),
            account: Random.name(),
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        datalist.push(newData)
    }
    return {
        data: datalist
    }
}

const data = Mock.mock('/getDataList', getData);
const data1 = Mock.mock('/setMsg', setMsg)
export default { data, data1 };

