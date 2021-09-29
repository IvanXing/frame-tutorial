<template>
    <div>
        <p>文本插值 {{message}}</p>
        <p>JS表达式 {{flag ? 'yes' : 'no'}} （只能是表达式，不能是 js 语句）</p>

        <p :title="dynamicId" :id="dynamicId">动态属性 title</p>

        <hr/>
        <p v-html="rawHtml">
            <span> 此用法有 xss 风险</span>
            <span>【注意】使用v-html之后，将会覆盖子元素</span>
        </p>
        <!-- 其他常用指令后面讲 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello vue',
            flag: true,
            rawHtml: '指令 - 原始 html <b>加粗</b> <i>斜体</i>',
            dynamicId: `dynamic-${Date.now()}`
        }
    }
}
</script>
