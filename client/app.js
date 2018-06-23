import Vue from 'vue';

import AppComponent from './app.vue';

const App = Vue.component('app', AppComponent);
const app = new App({
    el: '#main-app',
});
