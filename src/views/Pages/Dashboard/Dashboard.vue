<template>
<div>
    
    <br>
    <br>
    <br>
    <h5 style="margin-left: 1%">Cari Pegawai</h5>
    <form>
    <div class="card">
        <div class="card-body">
            <div class="input-group">
            <v-text-field
         v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Nip / Nama"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        ></v-text-field>
        <!-- <button class="btn btn-primary">Cari</button> -->
            </div>
        
        </div>
    </div>
    </form>
    <br>
    <br>
        <v-simple-table>
            <template v-slot:default>
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
                <td><button class="btn btn-primary" @click="$router.push('rinci')">Proses</button></td>
                </tr>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">Proses</button></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>

</div>
   



</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: "Dashboard",
    components: {Navbar}
}
</script>

