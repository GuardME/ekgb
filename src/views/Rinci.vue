<template>
<div>
    <Navbar/>
    <br>
    <nav aria-label="breadcrumb" class="container">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Hitung</a></li>
        <li class="breadcrumb-item active" aria-current="page">Rinci Pegawai</li>
    </ol>
    </nav>
    <br>
    <div class="container">
        <h3>Data Pegawai</h3>
        <br>
        <div class="card">
            <div class="card-body">
                <div class="card">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Nama
                                </div>
                                <div class="col">
                                    : Verdy Azhar
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Nip
                                </div>
                                <div class="col">
                                    : 198512272005021001
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Pangkat / Golongan Ruang
                                </div>
                                <div class="col">
                                    : Penata Muda Tingkat I, III/b
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Unit Kerja 
                                </div>
                                <div class="col">
                                    : Sekretariat Direktorat Jenderal PSDKP
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                 <br>
                    <div class="card">
                        <div class="card-header">Dasar Penggajian Saat Ini</div>
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        Gaji Pokok Lama
                                    </div>
                                    <div class="col">
                                        :  Rp. 3.200.000,-
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Atas Dasar
                                    </div>
                                    <div class="col">
                                        : SK KGB
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Oleh Pejabat
                                    </div>
                                    <div class="col">
                                        : Sekretariat Direktorat Jendral PSDKP
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Tanggal
                                    </div>
                                    <div class="col">
                                        : 821/KPTS/BKPP/2021
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Tanggal Mulai Berlaku
                                    </div>
                                    <div class="col">
                                        : 01 Juni 2022
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        Masa Kerja golongan
                                    </div>
                                    <div class="col">
                                        16 Tahun 0 Bulan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 <br>
                 <div class="card">
                    <div class="card-header">USULAN KENAIKAN GAJI BERKALA PADA 1 JUNI 2022</div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Gaji Pokok Baru
                                </div>
                                <div class="col">
                                    : Rp. 3.400.000,-
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Berdasarkan masa Kerja
                                </div>
                                <div class="col">
                                    : 18 tahun 0 Bulan
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Dalam golongan
                                </div>
                                <div class="col">
                                    : III/b
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Mulai Tanggal
                                </div>
                                <div class="col">
                                    : 1 Juni 2022
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Kenaikan Gaji Berikutnya
                                </div>
                                <div class="col">
                                    : 1 Juni 2024
                                </div>
                            </div>
                           <br>
                           <br>
                            
                            <div class="d-flex justify-content-center">
                                <h3><strong class="text-success">KGB Dapat Diproses</strong></h3>
                            </div>
                            <br>
                            <br>
                        </div>
                    </div>
                 </div>
                   <br>
                   <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-outline-secondary">Kembali</button>
                    <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Proses</button>
                    
                    </div>
                 <!-- Modal -->
             <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
           
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Apakah anda yakni akan memproses KGB 
                        A.n. Verdy Azhar ?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
                        <button type="button" class="btn btn-primary" @click="$router.push('cetak')">Ya</button>
                    </div>
                    </div>
                </div>
                </div>
                 <!-- End Modal -->
            </div>
        </div>
    </div>
    <br>
    
</div>

</template>


<script>
import Navbar from "@/components/Navbar.vue"
import Modal from "@/components/Modal.vue"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
    components: {Navbar,Modal},
}
</script>