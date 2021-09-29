import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        // // 01. 正常渲染
        // // this.props.children 获取子元素
        // return <div className="modal">
        //     {this.props.children} {/* vue slot */}
        // </div>


        // 02. 使用 Portals 渲染到 body 上。不嵌套里面
        // fixed 元素要放在 body 上，有更好的浏览器兼容性。
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body // DOM 节点
        )
    }
}

export default App

// 组件默认按照既定层次嵌套渲染
// 如何让组件渲染到父组件以外？

// 使用场景
// overflow:hidden
// 父组件z-index太小
// fixed需要放在body第一层级
