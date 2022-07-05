<template>
    <div class="container">
        <h5>Hasil pencarian pegawai</h5>
        <br>
        <div class="card">
            <div class="card-body">
                   <div class="justify-content-center responsive" style="background-color: white">
            <table class="table table-bordered text-center">
            <thead class="table-head text-primary table-light">
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
                <td>
                    <button class="btn btn-primary" @click="$router.push('tambah')" style="margin-right: 7%">Tambah</button>
                    <button class="btn btn-primary" @click="$router.push('tambah')">Set Default</button>
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
    name: "Search"
}
</script>