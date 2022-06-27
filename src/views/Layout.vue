<template>
     <v-app>
      <Navbar/>
      <br>
      <br>
      <br>
         <main class="container">
            <h1>Perhitungan KGB</h1>
         <div class="card">
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Nip / Nama" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="card">
            <div class="card-body">
                <h4>Data Pegawai yang Naik KGB</h4>
                <table class="table table-bordered">
                
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