import Vue from 'vue';
import Router from 'vue-router';
import showBlogs from './components/showBlogs.vue';
import mains from './components/mains.vue';
Vue.use(Router);

var router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: mains
        },
        {
            path: '/showBlogs',
            name: 'showBlogs',
            component: showBlogs
        }
    ]
});

export default router;