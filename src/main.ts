import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { http } from '@/utils/http'
import { api } from '@/utils/api'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(store).use(router).use(Vant).mount('#app')

app.config.globalProperties.$http = http
app.config.globalProperties.$api = api