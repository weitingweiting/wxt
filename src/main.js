import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

// if (process.env.VUE_APP_SHOWCONSOLE === 'true') {
//   let Vconsole = require('../node_modules/vconsole/dist/vconsole.min')
//   new Vconsole()
// }

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
