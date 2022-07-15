import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')

window.Kakao.init('548c540433bbbcdc69a20239e4be97ff');