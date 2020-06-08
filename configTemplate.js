/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/10
 * Description: 文件描述
 */

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'project name',
    default: 'vue-template-sinorock-cli',
  },
  {
    type: 'input',
    name: 'description',
    message: 'description',
    default: '通过sinorock-cli可以定制化编译成项目需要的专属模板',
  },
  {
    type: 'input',
    name: 'author',
    message: 'author',
    default: 'sinorock',
  },
  {
    type: 'confirm',
    name: 'router',
    message: '是否安装router',
    default: true,
  },
  {
    type: 'confirm',
    name: 'eslint',
    message: '是否安装eslint',
    default: true,
  },
];
