import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Col, Row,Field, Icon} from 'vant';

Vue.use(Button).use(Col).use(Row).use(Field).use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
