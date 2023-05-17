import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import router from "@/router/router";

const app = createApp(App)
components.forEach(el => {
    app.component(el.name, el)
})


app.use(router)
app.mount('#app')
