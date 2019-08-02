import Vue from 'vue'
import App from './App'

import ctmainpage from './pages/main_page/home/home.vue'
Vue.component('ctmainpage',ctmainpage)

import ctaboutpage from './pages/main_page/about/about.vue'
Vue.component('ctaboutpage',ctaboutpage)

import ctpost from './pages/main_page/post/post.vue'
Vue.component('ctpost',ctpost)

import ctmy from './pages/main_page/my/my.vue'
Vue.component('ctmy',ctmy)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



