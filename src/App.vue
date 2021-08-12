<!--
 * @Author: Snow
 * @Date: 2021-08-12 23:21:55
 * @LastEditTime: 2021-08-12 23:47:25
 * @LastEditors: Snow
 * @Description: 
 * @FilePath: /my-vue-app/src/App.vue
-->
<template>
    <div id="app">
        <!-- <span class="block bg-blue-400 text-xl text-white">Hello World</span>
        <img alt="Vue logo" src="./assets/logo.png" />

        <button class="btn-indigo">
            Click me
        </button> -->

        <div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            <div class="h-64">1323</div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
    },
}
</script>

<style>
.btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
