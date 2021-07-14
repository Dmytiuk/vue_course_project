import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import axios from 'axios'
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';


Vue.prototype.$http = axios
Vue.use(AccordionPlugin);
Vue.use(VueKinesis)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

