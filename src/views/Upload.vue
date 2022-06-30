<template>
        <v-app>
        <div style="background-color: #DCDCDC; height: 100%;">
        <Navbar/>
      
        <div class="container">
            <br>
            <h6>Cari Pegawai</h6>
            <br>
             <div class="card">
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Nip / Nama" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                </div>
                <br>
            </div>
        </div>
        <br>
        <h6>Upload SK KGB</h6>
        <br>
        <div class="card">
            <div class="card-body">
                 <div class="justify-content-center responsive">
            <table class="table table-bordered text-center">
            <thead class="table-head text-white">
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">Unit Kerja</th>
                <th scope="col">Gol</th>
                <th scope="col">TMT KGB Berkala</th>
                <th scope="col">Masa Kerja</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary" @click="$router.push('rincipegawai')">Upload</button> &nbsp;<button href="" class="btn btn-primary">Edit</button></td>
                </tr>
               
            </tbody>
         </table>
         </div>
            </div>
        </div>
        </div>
    </div>
        </v-app>
    
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    components: {Navbar}
}
</script>
<style>
.table-head {
    background-color: #0d6efd;
}
</style>