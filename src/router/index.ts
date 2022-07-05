import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from "@/views/Pages/Layout.vue"
import Rinci from "@/views/Pages/Rinci/Rinci.vue"
import Dashboard from "@/views/Pages/Dashboard/Dashboard.vue"
import DashboardSK from "@/views/Pages/UpdateData/Dashboard/DashboardSK.vue"
import RinciPegawai from "@/views/Pages/UpdateData/RinciPegawai/RinciPegawai.vue"
import InputSK from "@/views/Pages/UpdateData/InputSK/InputSK.vue"
import SuccessAlert from "@/views/Pages/Alert/AlertSuccess.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '', component: Layout,
    children: [
      {path: '', component: Dashboard},
      {path: '/rinci', component: Rinci},
      {path: 'dashboardSK', component: DashboardSK},
      {path: 'RinciPegawai', component: RinciPegawai},
      {path: 'InputSK', component: InputSK},
      {path: 'AlertSuccess', component: SuccessAlert}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
