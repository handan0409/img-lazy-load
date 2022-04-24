/*
 * @Author: handan05
 * @Date: 2022-02-09 19:43:52
 * @LastEditors: handan05
 * @LastEditTime: 2022-04-24 18:00:47
 * @FilePath: /operation-utils/Users/handan/Documents/handan_work/58project/tech/img-lazy-load/src/lazy-load.js
 * @Description: 
 */
/**
 * 2022/02/09
 * handan
 * 图片懒加载功能封装
 */

/**
 * options
 * root：用于计算的根窗口，默认是浏览器视口
 * minTop: 元素距离可视区域顶部多少时，触发加载图片资源，单位：px，默认: 0
 * minLeft: 元素距离可视区域右侧多少时，触发加载图片资源，单位：px，默认: 0
 * minButtom: 元素距离可视区域底部多少时，触发加载图片资源，单位：px，默认: 0
 * minRight: 元素距离可视区域左侧多少时，触发加载图片资源，单位：px，默认: 0
 */
class ImgLazy {
  constructor(params){
    let { minTop = 0, minLeft = 0, minButtom = 0, minRight = 0 } = params || {}
    let rootMargin = `${minTop}px ${minLeft}px ${minButtom}px ${minRight}px`
    this.options = Object.assign({}, this.getDefaultConfig(), {rootMargin})

    this.init();
  }

  /**
   * 
   * @returns 默认参数配置项
   */
  getDefaultConfig = () => {
    return {
      root: null, // 用于计算的根窗口，默认是浏览器视口
      rootMargin: "0px 0px 0px 0px",    // 用于扩大视口的大小
    }
  }

  /**
   * 初始化执行
   */
  init = () => {
    let imgs = document.querySelectorAll('[data-src]') // 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src
    
    const io = new IntersectionObserver(callback, this.options);  // 实例化 默认基于当前视窗
    function callback(entries) {
      entries.forEach((item) => { // 遍历entries数组
        if(item.isIntersecting){  // 当前元素可见
          item.target.src = item.target.dataset.src  // 替换src
          io.unobserve(item.target) // 停止观察当前元素 避免不可见时候再次调用callback函数
        }
      })
    }
    imgs.forEach((item) => {  // io.observe接受一个DOM元素，添加多个监听 使用forEach
      io.observe(item)
    })
  }
}

export default ImgLazy



