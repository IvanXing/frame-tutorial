import React from 'react'

// bind this
// 关于 event 参数
// 传递自定义参数

class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }

        // 修改方法的 this 指向
        this.clickHandler1 = this.clickHandler1.bind(this)
    }
    render() {

        // // 01.this - 使用 bind
        // return <p onClick={this.clickHandler1}>
        //     {this.state.name}
        // </p>


        // // 02.this - 使用箭头函数
        // return <p onClick={this.clickHandler2}>
        //     clickHandler2 {this.state.name}
        // </p>


        // // 03.event
        // return <a href="https://imooc.com/" onClick={this.clickHandler3}>
        //     click me
        // </a>
        

        // 04.传递参数 - 用 bind(this, a, b)
        return <ul>{this.state.list.map((item, index) => {
            return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>
                index {index}; title {item.title}
            </li>
        })}</ul>

        // 此种传参方法没有默认event传入 e传入还未测试
        // return <li key={item.id} onClick={(e) => this.clickHandler4(item.id, item.title, e)}></li>


    }
    clickHandler1 = () => {
        // console.log('this....', this) // this 默认是 undefined， 改成箭头函数也可以，取上级this
        this.setState({
            name: 'lisi'
        })
    }
    // 箭头函数，this 指向当前实例
    clickHandler2 = () => {
        this.setState({
            name: 'lisi'
        })
    }
    // 获取 event
    clickHandler3 = (event) => {
        event.preventDefault() // 阻止默认行为
        event.stopPropagation() // 阻止冒泡
        console.log('target', event.target) // 指向当前元素，即当前元素触发
        console.log('current target', event.currentTarget) // 指向当前元素，假象！！！

        // 注意，event 其实是 React 封装的。可以看 __proto__.constructor 是 SyntheticEvent 组合事件
        console.log('event', event) // 不是原生的 Event ，原生的 MouseEvent
        console.log('event.__proto__.constructor', event.__proto__.constructor)

        // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
        console.log('nativeEvent', event.nativeEvent)
        console.log('nativeEvent target', event.nativeEvent.target)  // 指向当前元素，即当前元素触发
        console.log('nativeEvent current target', event.nativeEvent.currentTarget) // 指向 document ！！！

        // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
        // 2. event.nativeEvent 是原生事件对象
        // 3. 所有的事件，都被挂载到 document 上   react17之后不挂在document上了,绑定到root组件上了
        // 4. 和 DOM 事件不一样，和 Vue 事件也不一样
    }
    // 传递参数
    clickHandler4(id, title, event) {
        console.log(id, title)
        console.log('event', event) // 最后追加一个参数，即可接收 event
    }
}

export default EventDemo



// js中this是在函调用时绑定的执行环境(在哪个环境执行this就指向哪个环境)，如果调用一个函数并没有指定具体的执行环境，那么就在非严格模式下指向全局环境(window),严格模式则不存在(undefined), 多说一句，这也就解释了setTimout的为什么内部this指向的是全局，因为执行的时候其实是执行window.setTimeout(),而这个window就是setTimeout内部的this。

// 而在jsx内部，事件处理函数不是直接绑定在真实节点上的，而是通过解析赋值给了当前节点的virtual dom对象上的，并且把这些virtual dom对象上事件联系到最外层的事件监听器上，当监听到该事件出发则执行其对应的处理函数（事件委派）。由于这个监听器是在最外层，并不是在组件内部执行的，所以事件处理函数内部this并不是指向该组建的，但由于外部也没有定义具体执行环境所以严格模式下就是undefined

// 如果在组件内部用箭头函数创建方法，由于箭头函数在执行的时候并不会创建其自身的执行环境，而是继承上层的执行环境，其内部的this也就自动指向到了当前组件，所以在jsx中事件绑定箭头函数的方法，其实内部已经绑定好了一个指向当前组件的this