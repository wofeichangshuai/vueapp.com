// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import HelloWorld from './components/HelloWorld'
import ComponentA from './components/ComponentA'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

//设置路由
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: Users,
            meta: { title: 'Users' }
        },
        {
            path: '/helloWorld',
            component: HelloWorld,
            meta: { title: 'HelloWorld' }
        },
        {
            path: '/componentA/aaaaaa',
            component: ComponentA,
            meta: { title: 'ComponentA' }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

/* eslint-disable no-new */
new Vue({
    router,
    template: `
      <div id="app">
        <ul>
          <li>
            <router-link to="/">Users111</router-link>
            <router-link to="/helloWorld">HelloWorld111</router-link>
            <router-link to="/componentA/aaaaaa">ComponentA111</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>`
}).$mount("#app")