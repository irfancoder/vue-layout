<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import { useLayout } from './composable/useLayout'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const { layout } = useLayout(useRoute())
        return { layout }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
