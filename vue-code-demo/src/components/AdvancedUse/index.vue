<template>
    <div>
        <p>vue 高级特性</p>
        <hr>

        <!-- 01.自定义 v-model -->
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->


        <!-- 02.nextTick ref-->
        <!-- <NextTick/> -->


        <!-- 03.slot -->
        <!-- 03.1 基本使用 -->
        <!-- <SlotDemo :url="website.url">
            {{website.title}}
        </SlotDemo> -->
        <!-- 03.2 作用域插槽-->
        <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlotDemo> -->
        <!-- 03.3 具名插槽 给插槽起名字 -->


        <!-- 04.动态组件 根据场景渲染类型不确定的组件-->
        <!-- <component :is="NextTickName"/> -->

        
        <!-- 05.异步组件 -->
        <!-- 用时import -->
        <!-- <FormDemo v-if="showFormDemo"/>
        <button @click="showFormDemo = true">show form demo</button> -->


        <!-- 06.keep-alive -->
        <!-- 缓存组件 频繁切换，不需要重复渲染 -->
        <!-- <KeepAlive/> -->


        <!-- 07.mixin -->
        <!-- 多个组件有相同逻辑，抽离出来 -->
        <MixinDemo/>
        
    </div>
</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import KeepAlive from './KeepAlive'
import MixinDemo from './MixinDemo'

export default {
    components: {
        // CustomVModel,
        // NextTick,
        // SlotDemo,
        // ScopedSlotDemo,
        // FormDemo: () => import('../BaseUse/FormDemo')
        // KeepAlive
        MixinDemo
    },
    data() {
        return {
            name: '双越',
            website: {
                url: 'http://imooc.com/',
                title: 'imooc',
                subTitle: '程序员的梦工厂'
            },
            NextTickName: "NextTick",
            showFormDemo: false
        }
    }
}
</script>