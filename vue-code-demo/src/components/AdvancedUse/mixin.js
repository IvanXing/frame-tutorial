export default {
    data() {
        return {
            city: '北京'
        }
    },
    methods: {
        showName() {
            // eslint-disable-next-line
            console.log(this.name)
        }
    },
    mounted() {
        // eslint-disable-next-line
        console.log('mixin mounted', this.name)
    }
}


// 变量来源不明确 不利于阅读
// 多mixin可能会导致命名冲突
// 多对多会造成维护难度，多个组件引用一个mixin，一个组件引入多个mixin