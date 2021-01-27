/*
 * @Author: your name
 * @Date: 2019-11-07 18:24:36
 * @LastEditTime: 2019-11-14 13:34:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constructionService(共建系统)\src\utils\axios\baseUrl.ts
 */
let NODE_ENV = process.env.NODE_ENV;

class BaseConfig {

    url = () => {

        return process.env.netUrl;
    }
    javaurl = () => {

        return process.env.javaUrl;

    }
    questionanalyze = () => {

        return process.env.questionanalyze;

    }
    fileService = () => {
      return process.env.fileService
    }
}
export default new BaseConfig();
