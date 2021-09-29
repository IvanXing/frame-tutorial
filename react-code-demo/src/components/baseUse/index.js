import React from 'react'

// import JSXBaseDemo from './JSXBaseDemo'
// import ConditionDemo from './ConditionDemo'
// import ListDemo from './ListDemo'
// import EventDemo from './EventDemo'
// import FormDemo from './FormDemo'
// import PropsDemo from './PropsDemo'
import StateDemo from './StateDemo'
// import StateDemo1 from './StateDemo1'

class BaseUseDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* 01.基本使用 */}
            {/* <JSXBaseDemo/> */}
            {/* 02.条件判断 */}
            {/* <ConditionDemo/> */}
            {/* 03.列表渲染 */}
            {/* <ListDemo/> */}
            {/* 04.事件 */}
            {/* <EventDemo/> */}
            {/* 05.表单 */}
            {/* <FormDemo/> */}
            {/* 06.组件 父子通讯 */}
            {/* <PropsDemo/> */}
            {/* 07.setsState使用不可变值，可能异步更新，可能会被合并 */}
            <StateDemo/>
            {/* <StateDemo1/> */}
        </div>
    }
}

export default BaseUseDemo

// React 组件生命周期图示
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
