import React from 'react'
// import UncontrolledDemo from './UncontrolledDemo'
// import PortalsDemo from './PortalsDemo'
// import ContextDemo from './ContextDemo'
// import LazyDemo from './LazyDemo'
// import SCUDemo from './SCUDemo'
// import SCUDemo2 from './SCUDemo2'
// import PureComponentDemo from './PureComponentDemo'
// import HOCDemo from './HOCDemo'
import RenderPropDemo from './RenderPropDemo'

class AdvancedUse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* 2.1 非受控组件 */}
            {/* ref操作dom */}
            {/* <UncontrolledDemo/> */}

            {/* 2.2 Portals */}
            {/* <PortalsDemo>Modal 内容</PortalsDemo> */}

            {/* 2.3 context 对标 vue inject provide */}
            {/* <ContextDemo/> */}

            {/* 2.4 异步组件 */}
            {/* <LazyDemo/> */}

            {/* 2.5 性能优化 */}
            {/* shouldComponentUpdate */}
            {/* <SCUDemo/> */}
            {/* 必须配合不可变值 防止进入scu对比相同*/}
            {/* <SCUDemo2/> */}
            {/* scu浅比较 函数组件用memo，相同效果 */}
            {/* <PureComponentDemo/> */}

            {/* 2.6 组件公共逻辑抽离 */}
            {/* 2.6.1 mixin已被react废弃 */}
            {/* 2.6.2 hoc高阶组件 */}
            {/* <HOCDemo a="100"/> */}
            {/* 2.6.3 render props */}
            <RenderPropDemo a="200"/>
        </div>
    }
}

export default AdvancedUse
