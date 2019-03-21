import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Coupon from '../components/Router/coupon/coupon'
import Login from '../components/Router/login/login'
import Register from '../components/Router/register/register'
import Search from '../components/Router/search/search'
import Publish from '../components/Router/publish/publish'
import Category from '../components/Router/category_list/category_list'
import Transition from '../components/transitionpage'
import Transitionpage from '../components/transitionpage/transition'
import Shopdetail from '../components/Router/detail/shopdetail'
import hdNav from '../components/common/hdNav'
import homesearch from '../components/search/search'
import My from '../components/Router/my/my'
  import Myindex from '../components/Router/my/mymodule/index'
  import Mywant from '../components/Router/my/mymodule/mywant'
  import Mymessage from '../components/Router/my/mymodule/mymessage'
  import Checkinfo from '../components/Router/my/mymodule/checkinfo'
// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://127.0.0.1:3001/'
Vue.prototype.$ajax = Axios
Vue.use(Router)
Vue.component('hdseacher',homesearch)
Vue.component('hdNav',hdNav)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component:Home,
    },
    {
      path: '/search',
      name: 'search',
      component:Search
    },
    {
      path: '/pulish',
      name: 'publish',
      component:Publish
    },
    {
      path: '/category/:id',
      name: 'category_list',
      component:Category
    },
    {
      path: '/coupon',
      name: 'yhq',
      component:Coupon
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/register',
      name: 'register',
      component:Register
    },
    {
      path: '/transition',
      name: 'transition',
      component:Transition
    },
    {
      path: '/transitions',
      name: 'transitions',
      component:Transitionpage
    },
    {
      path: '/detail/:id',
      name: 'shopdetail',
      component:Shopdetail
    },
    {
      path: '/user',
      name: 'usermy',
      component:My,
      redirect: '/user/index',
      children:[
        {
          path:'/user/index',
          component:Myindex,
        },
        {
          path:'/user/want',
          component:Mywant,
        },
        {
          path:'/user/message',
          component:Mymessage,
        },
        {
          path:'/user/checkinfo',
          component:Checkinfo,
        },
      ]
    },

  ]
})
