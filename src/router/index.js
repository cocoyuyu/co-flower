import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import All from '../views/Home/All'
import Member from '../views/Home/Member'
import Shopping from '../views/Home/Shopping'
import Cake from '../views/Cake'
import Chocolates from '../views/Chocolates'
import Flower from '../views/Flower'
import Gifts from '../views/Gifts'
import LoginR from '../views/LoginR'
import Product from '../views/Product'
import Ranking from '../views/Ranking'
import Search from '../views/Search'
import SearchResults from '../views/SearchResults'
import Yongsheng from '../views/Yongsheng'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  component: Home,
  children: [
    {
      path: 'all',
      component: All
    },
    {
      path: 'member',
      component: Member
    },
    {
      path: 'shopping',
      component: Shopping
    }
  ]
},
{
  path: '/cake',
  component: Cake
},
{
  path: '/chocolates',
  component: Chocolates
},
{
  path: 'flower',
  component: Flower
},
{
  path: '/gifts',
  component: Gifts
},
{
  path: '/loginr',
  component: LoginR
},
{
  path: '/product',
  component: Product
},
{
  path: '/ranking',
  component: Ranking
},
{
  path: '/search',
  component: Search
},
{
  path: '/searchResults',
  component: SearchResults
},
{
  path: '/yongsheng',
  component: Yongsheng
},
{
  path: '/',
  redirect: '/home'
}
]

const router = new VueRouter({
  routes
})

export default router
