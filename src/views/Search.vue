<template>
<v-app>
<div style="background-color: #DCDCDC;; height: 600%;">
    <Navbar/>
    <div class="container">
        <h5>Data Pegawai</h5>
        <br>
        <div class="card">
            <div class="card-body">
                   <div class="justify-content-center responsive" style="background-color: white">
            <table class="table table-bordered text-center">
            <thead class="table-head text-white">
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">Unit Kerja</th>
                <th scope="col">Gol</th>
                <th scope="col">Dasar SK</th>
                <th scope="col">Nomor</th>
                <th scope="col">TMT</th>
                <th scope="col">Masa Kerja</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>22131/PSDKP</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">View</button></td>
                </tr>
               
            </tbody>
         </table>
         </div>
            </div>
        </div>
    </div>
    <br>
    
</div>
</v-app>


</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {Navbar},
    name: "Search"
}
</script>