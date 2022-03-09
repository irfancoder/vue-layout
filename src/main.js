/** @format */

import { createApp } from 'vue'
import App from './development/App.vue'
import route from './development/route'

const app = createApp(App)
app.use(route)
app.mount('#app')
