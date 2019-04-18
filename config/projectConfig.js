'use strict'
const projectName = require('./project');

const config = {
  //项目1 key与packge.json中build传参一致
  // localPath为该项目的根路径
  'universal':{
    localPath:'./src/projects/resell-universal-ui/',
  },
  //项目2 key与packge.json中build传参一致
  // localPath为该项目的根路径
  'mobile':{
    localPath:'./src/projects/resell-mobile-ui/',
  }
};

const configObj = config[projectName.name];
module.exports = configObj;