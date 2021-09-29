import Vue from 'vue'

export default new Vue()


// 第一，因为自定义组件要用全局的，而 this 只是当前组件，而且这个组件有可能会接下来被销毁。所以，一定要有一个全局的、第三方的、永远不会被销毁的自定义事件对象。

// 第二，$emit 传递参数很简单，例如：

// vm.$on('test', function (msg) {
//     console.log(msg)
// })
// vm.$emit('test', 'hi')// => "hi"



// 生命周期 
// 挂载  更新  销毁

// created vue的实例已经初始化，但是还没有渲染
// mounted 页面已经渲染完了


// 父子组件渲染顺序： 
// 渲染：index created -> list created -> list mounted -> index mounted
// 父组件初始化，自组件初始化，子组件渲染完，父组件渲染完  -> 父开头 父拖底
// 触发事件后更新：index before update -> list before update -> list updated -> index updated