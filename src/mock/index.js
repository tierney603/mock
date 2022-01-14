import Mock from 'mockjs'
import common from './common'
Mock.setup({
    timeout: "20-200",
});
Mock.mock('/user/login', 'post', common.login)
Mock.mock('/user/getData', 'post', common.getData)



