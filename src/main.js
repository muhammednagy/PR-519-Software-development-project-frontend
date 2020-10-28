import Vue from 'vue'

import App from './App.vue'
import router from './router/router'

import vuetify from './plugins/vuetify'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted'

Vue.use(Toasted)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
