<template>
    <div>
        <input v-model="name"/>
        <input v-model="info.city"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '双越',
            info: {
                city: '北京'
            }
        }
    },
    watch: {
        name(val, oldVal) {
            console.log('watch name', val, oldVal) // 值类型，可正常拿到 oldVal 和 val
        },
        info: {
            handler(oldVal, val) {
                // 引用类型，拿不到 oldVal 。因为对象指针相同，此时已经指向了新的 val
                console.log('watch info =>', val) 
                console.log('watch info oldVal =>', oldVal)
            },
            deep: true // 深度监听引用类型，遍历
        }
    }
}
</script>