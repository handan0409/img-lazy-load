<!--
 * @Author: handan05
 * @Date: 2022-04-24 20:29:28
 * @LastEditors: handan05
 * @LastEditTime: 2022-04-24 20:48:45
 * @FilePath: /operation-utils/Users/handan/Documents/handan_work/58project/tech/img-lazy-load/README.md
 * @Description: 
-->
# 图片懒加载插件

## 使用方法

### 引入

npm install --save hd-img-lazy-load 或 yarn add hd-img-lazy-load 
```js
import ImgLazy from "hd-img-lazy-load"
new ImgLazy(options)
```

### options
```
root：用于计算的根窗口，默认是浏览器视口
minTop: 元素距离可视区域顶部多少时，触发加载图片资源，单位：px，默认: 0
minLeft: 元素距离可视区域右侧多少时，触发加载图片资源，单位：px，默认: 0
minButtom: 元素距离可视区域底部多少时，触发加载图片资源，单位：px，默认: 0
minRight: 元素距离可视区域左侧多少时，触发加载图片资源，单位：px，默认: 0
```

### 示例
```js
new ImgLazy({
      root: document.getElementById("root"),
      minButtom: -30
})

<img data-src="xxx.png" src="默认占位图.png" />
```




