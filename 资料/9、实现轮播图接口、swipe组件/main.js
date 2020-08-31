import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Col, Row,Field, Icon,Tab, Tabs,Swipe, SwipeItem} from 'vant';

Vue.use(Button).use(Col).use(Row).use(Field).use(Icon)
		.use(Tab).use(Tabs).use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
