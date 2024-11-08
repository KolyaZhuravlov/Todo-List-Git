// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Импортируем стили Vuetify
import { md3 } from 'vuetify/blueprints' // Включаем Blueprint Material Design 3
import '@mdi/font/css/materialdesignicons.css' // Импортируем иконки

const vuetify = createVuetify({
  blueprint: md3, // Настройка Blueprint для Material Design 3
  icons: {
    defaultSet: 'mdi' // Настроить иконки по умолчанию на mdi
  }
})

export default vuetify

	