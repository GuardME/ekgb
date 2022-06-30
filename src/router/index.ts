import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from "@/views/Layout.vue"
import Rinci from "@/views/Rinci.vue"
import Upload from "@/views/Upload.vue"
import UploadForm from "@/views/Upload_Form.vue"
import RinciPegawai from "@/views/Rinci_Pegawai.vue"
import InputSK from "@/views/Input_SK.vue"
import Cetak from "@/views/Cetak.vue"
import Dashboard from "@/views/Dashboard.vue"
import Search from "@/views/Search.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/rincipegawai', component: RinciPegawai},
  {path: '/cetak', component: Cetak},
  {path: '/inputsk', component: InputSK},
  {path: '/rinci', component: Rinci},
  {path: '/upload', component: Upload},
  {path: '/uploadform', component: UploadForm},
  {path: '/layout', component: Layout},
  {path: '/search', component: Search},
  {path: '', component: Dashboard}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
