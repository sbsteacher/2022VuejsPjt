import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
.mixin(mixins)
.use(router)
.use(store)
.use(VueSweetalert2)
.mount('#app')

window.Kakao.init('548c540433bbbcdc69a20239e4be97ff');