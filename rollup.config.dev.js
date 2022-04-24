/*
 * @Author: handan05
 * @Date: 2022-04-24 18:05:21
 * @LastEditors: handan05
 * @LastEditTime: 2022-04-24 20:22:53
 * @FilePath: /operation-utils/Users/handan/Documents/handan_work/58project/tech/img-lazy-load/rollup.config.dev.js
 * @Description: 开发环境，启动服务，运行测试页面
 */

import packageInfo from "./package.json";
import resolve from '@rollup/plugin-node-resolve';  //帮助寻找node_modules里的包
import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
import babel from 'rollup-plugin-babel'; // ES6转ES5 依赖安装 @babel/core @babel/preset-env @babel/plugin-transform-runtime
import replace from '@rollup/plugin-replace'; //变量替换，可以将动态设置的变量提取出来在配置文件中设置
import serve from 'rollup-plugin-serve';  // serve 插件，开发环境，启动服务

const env = process.env.NODE_ENV || 'development';

export default {
  input: "public/test.js", // 入口文件
  output: {
    file: "dist/index.js", // 导出文件，打包后的文件
    format: "umd",  // 导出文件格式
    name: packageInfo.name, // 包名称
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    replace({
      preventAssignment: true,
      'ENV': JSON.stringify(env), // 在 src/entry.js文件中即可使用 ENV 变量
    }),
    serve({
      open: true,
			port: 8000,
			openPage: '/public/test.html',
    })
  ]
}