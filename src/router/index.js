import Vue from 'vue'
import VueRouter from 'vue-router'

import Mind from '../views/Mind'
import Home from '../views/Mind/Home'
import All from '../views/Mind/All'
import Member from '../views/Mind/Member'
import Shopping from '../views/Mind/Shopping'
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
  path: '/',
  component: Mind,
  children: [
    {
      path: 'home',
      component: Home
    },
    {
      path: 'member',
      component: Member
    },
    {
      path: 'shopping',
      component: Shopping
    },
    {
      path: 'all',
      component: All
    },
    {
      path: '',
      redirect: 'home'
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
  path: '/flower',
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
  redirect: '/mind'
}
]

const router = new VueRouter({
  routes
})

export default router
