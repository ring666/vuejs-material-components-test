import Vue from 'vue'
import App from './App'

import MaterialComponents from 'vue-material-components'
import 'vue-material-components/assets/css/materialize.min.css'

Vue.use(MaterialComponents)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
