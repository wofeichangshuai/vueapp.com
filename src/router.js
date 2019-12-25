import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
    mode: 'history',
    base: '/',
    router: [{
        path: '/article',
        name: 'article',
        component: () =>
            import ('./components/Article.vue')
    }]
})

export default router