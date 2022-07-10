<template>
    <div class="container">
    <br>
    <h5 style="margin-left: 1%">Tambah SK</h5>
    <br>
    <form>
    <div class="card">
        <div class="card-body">
            <div class="input-group">
            <v-text-field
         v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="NIP / Nama"
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
    <h5 style="margin-left: 1%">Upload SK KGB</h5>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered align-middle">
            <thead class="header-table text-white">
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">Unit Kerja</th>
                <th scope="col">Gol</th>
                <th scope="col">Dasar SK</th>
                <th scope="col">TMT</th>
                <th scope="col">Masa Kerja</th>
                <th scope="col">KGB Akan Datang</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td>01-06-2022</td>
                <td>
                    <button class="btn btn-primary" @click="$router.push('RinciPegawai')" style="margin-right: 2%">Upload</button>
                    <a href="" class="btn btn-primary"><i class="bi bi-pencil"></i></a>
                </td>
                </tr>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td>01-06-2022</td>
                <td>
                    <button class="btn btn-primary" @click="$router.push('RinciPegawai')" style="margin-right: 2%">Upload</button>
                    <a href="" class="btn btn-primary"><i class="bi bi-pencil"></i></a>
                </td>
                </tr>
            </tbody>    
        </table>
            </div>
        
        </div>
    </div>
       
    </div>
</template>

<script>
export default {
    name: "DashboardSK"
}
</script>

<style>

</style>