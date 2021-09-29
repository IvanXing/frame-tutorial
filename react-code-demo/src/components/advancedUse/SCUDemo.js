import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return <div>
            <span>{this.state.count}</span>
            <button onClick={this.onIncrease}>increase</button>
        </div>
    }
    onIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    // 演示 shouldComponentUpdate 的基本使用
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true // 可以渲染
        }
        return false // 不重复渲染
    }
}

export default App


// 基本知识点 PropsDemo.js 中 footer 组件 演示

// React 默认：父组件有更新，子组件则无条件也更新！！！
// 性能优化对于 React 更加重要！
// SCU 一定要每次都用吗？—— 需要的时候才优化