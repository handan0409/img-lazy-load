/*
 * @Author: handan05
 * @Date: 2022-02-16 17:43:08
 * @LastEditors: handan05
 * @LastEditTime: 2022-04-24 20:23:52
 * @FilePath: /operation-utils/Users/handan/Documents/handan_work/58project/tech/img-lazy-load/rollup.config.js
 * @Description: 生产环境，执行核心代码产出
 */

import packageInfo from "./package.json";
import resolve from '@rollup/plugin-node-resolve';  //帮助寻找node_modules里的包
import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
import babel from 'rollup-plugin-babel'; // ES6转ES5 依赖安装 @babel/core @babel/preset-env @babel/plugin-transform-runtime
import replace from '@rollup/plugin-replace'; //变量替换，可以将动态设置的变量提取出来在配置文件中设置
import serve from 'rollup-plugin-serve';  // serve 插件，开发环境，启动服务
import { terser } from 'rollup-plugin-terser';  // js 的压缩优化

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

export default {
  input: "src/entry.js", // 入口文件
  output: {
    file: "lib/index.js", // 导出文件，打包后的文件
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
    terser(),
    !isProduction && serve({
      open: true,
			port: 8000,
			openPage: '/public/test.html',
    })
  ]
}