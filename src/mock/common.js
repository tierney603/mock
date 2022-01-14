// 无法用mock模拟的数据

import Mock from 'mockjs'
import fakedata from './fakedata/data.js'

function login(req) {
    console.log(req)
    let data = Mock.mock({
        id: '@id',
        name: '@cname'

    })
    return { errCode: 0, data: data }
}
function getData(req) {
    console.log(req)
    let classes = fakedata.classes
    return { errCode: 0, data: classes }
}




export default {
    login,
    getData
}