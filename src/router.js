import Vue from 'vue';
import Router from 'vue-router';
import showBlogs from './components/showBlogs.vue';
import mains from './components/mains.vue';
import course1 from './components/course1.vue';
import course2 from './components/course2.vue';
import course3 from './components/course3.vue';
import course4 from './components/course4.vue';
import course5 from './components/course5.vue';
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
        },
        {
            path: '/course1',
            name: 'course1',
            component: course1
        },
        {
            path: '/course2',
            name: 'course2',
            component: course2
        },
        {
            path: '/course3',
            name: 'course3',
            component: course3
        },
        {
            path: '/course4',
            name: 'course4',
            component: course4
        },
        {
            path: '/course5',
            name: 'course5',
            component: course5
        }
    ]
});

export default router;