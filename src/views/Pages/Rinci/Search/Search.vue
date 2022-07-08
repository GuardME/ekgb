<template>
    <div class="container">
        <h5>Hasil pencarian pegawai</h5>
        <br>
        <div class="card">
            <div class="card-body">
                   <div class="justify-content-center table-responsive" style="background-color: white">
            <table class="table table-bordered text-center">
            <thead class="table-head text-dark" style="background: linear-gradient(#7b7bf5, #0275d8); font-size: medium;">
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
            <tbody style="font-size: medium; ">
                <tr scope="row" >
                <td style="padding: 10px;">Verdy Azhar</td>
                <td style="padding: 10px;">Sekretariat Ditjen PSDKP</td>
                <td style="padding: 10px;">III/b</td>
                <td style="padding: 10px;">KGB</td>
                <td style="padding: 10px;">22131/PSDKP</td>
                <td style="padding: 10px;">01-06-2022</td>
                <td style="padding: 10px;">17 th 2 bln</td>
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

<style>
td {
    padding: 10px;
}
</style>