import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI/index'
import router from "@/router/router";
import directives from './directives';

const app = createApp(App)
components.forEach(el => {
    app.component(el.name, el)
})

directives.forEach(directive =>{
    app.directive(directive.name, directive)
})


app.use(router)
app.mount('#app')
