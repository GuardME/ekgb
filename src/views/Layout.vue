<template>
     <v-app>
      <Navbar/>
      <br>
       <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  ></v-card>
         <main class="container">
            <h3>Perhitungan KGB</h3>
            <v-card
  elevation="2"
></v-card>
         <div class="card">
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Nip / Nama" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                </div>
            </div>
        </div>
        <br>
        <div class="card">
          <div class="card-header bg-primary">
            <h5 class="text-white">Data Pegawai yang Naik KGB</h5>
          </div>
            <div class="card-body">
                
                <div class="justify-content-center responsive">
          <table class="table table-bordered text-center">
                
            <thead>
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
                <td><button class="btn btn-primary" @click="$router.push('rinci')">proses</button></td>
                </tr>
                <tr>
                <td>Samsu Muarip</td>
                <td>Sekretariat Ditjen PDSKP</td>
                <td>III/b</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary">proses</button></td>
                </tr>
                <tr>
                <td>Tri Susulowati</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary">proses</button></td>
                </tr>
            </tbody>
                </table>
                </div>
               
            </div>
        </div>
        </main>

    </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {Navbar},
       data: () => ({
          date: '',
        }),
        methods: {
          printDate: function () {
            return new Date().toLocaleDateString();
          },
        },
        mounted: function () {
          this.date = this.printDate();
        },
        
}
</script>

<style>
</style>