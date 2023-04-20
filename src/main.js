import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Quasar } from 'Quasar'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar)

app.mount('#app')
