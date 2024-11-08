import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Импортируем Vuetify

const app = createApp(App)

app.use(vuetify) // Подключаем Vuetify

app.mount('#app') // Монтируем приложени

