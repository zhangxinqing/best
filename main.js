import Vue from 'vue'
import App from './App'

import homepage from './pages/home_page/home.vue'
Vue.component('homepage',homepage)

import aboutpage from './pages/home_page/about/about.vue'
Vue.component('aboutpage',aboutpage)

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

 



