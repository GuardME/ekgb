<template>
<div class="container">
    
    <br>

    <h5 style="margin-left: 1%">Cari Pegawai</h5>
    <br>
    <form>
    <div class="card">
        <div class="card-body">
                <v-text-field
                    :counter="10"
                    label="NIP / Nama"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
        </div>
    </div>
    </form>
    <br>
    <br>
    <h5 style="margin-left: 1%">Data Pegawai Yang Naik KGB Periode Juni s/d Agustus 2022</h5>
    <br>
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered">
            <thead class="header-table">
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">Unit Kerja</th>
                <th scope="col">Gol</th>
                <th scope="col">Dasar SK</th>
                <th scope="col">Nomor</th>
                <th scope="col">TMT</th>
                <th scope="col">Masa Kerja</th>
                <th scope="col">KGB Akan Datang</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody class="text-center justify-content auto-fil" height="125">
                 <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>12/PSDKP.01/2022</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td>01-06-2022</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">Proses</button></td>
                </tr>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>12/PSDKP.01/2022</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td>01-06-2022</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">Proses</button></td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>

</div>
   



</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: "Dashboard",
    components: {Navbar}
}
</script>

