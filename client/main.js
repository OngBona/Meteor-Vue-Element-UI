import Vue from 'vue';
import App from './App.vue';

// Element UI
import './main.html';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});