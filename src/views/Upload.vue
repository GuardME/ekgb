<template>
    <div>
        <Navbar/>
         <br>
        <nav aria-label="breadcrumb" class="container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Input</a></li>
            <li class="breadcrumb-item active" aria-current="page">Upload SK</li>
        </ol>
        </nav>
        <br>
        <div class="container">
             <div class="card">
            <div class="card-body">
                <h5>Cari Pegawai yang akan di input SK</h5>
                
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Nip / Nama" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Cari</button>
                </div>
                <br>
            </div>
        </div>
        <br>
        <h5>Upload Dokumen</h5>
        <br>
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
                <td><button class="btn btn-primary">Upload</button></td>
                </tr>
               
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    components: {Navbar}
}
</script>