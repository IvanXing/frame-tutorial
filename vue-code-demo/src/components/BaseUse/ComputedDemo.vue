<template>
    <div>
        <!-- computed有缓存，依赖没有变就不会触发 -->
        <p>num {{num}}</p>
        <p>double1 {{double1}}</p>
        <input v-model="double2"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 20
        }
    },
    computed: {
        double1() {
            console.log('double1变了');
            return this.num * 2
        },
        double2: {
            get() {
                console.log('double2-get')
                return this.num * 2
            },
            set(val) {
                console.log('double2-set')
                this.num = val/2
            }
        }
    }
}
</script>