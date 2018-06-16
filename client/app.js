import Vue from 'vue';

import AppComponent from './app.vue';

new Vue({
    el: '#main-app',
    template: '<app/>',
    components: { app: AppComponent }
});
