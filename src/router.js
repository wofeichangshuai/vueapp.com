import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
    mode: 'history',
    base: '/',
    router: [{
        path: '/article/aaa',
        name: 'article',
        component: () =>
            import ('./components/Article.vue')
    }]
})

export default router