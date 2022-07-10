<template>
<div class="container">
        <div class="card" style="margin-top: -15px; height: 810px;">
            <div class="card-body" style="margin-bottom: 55px">
                <div class="card" style="margin-bottom:5px;">
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Nama
                                </div>
                                <div class="col-4">
                                    : Verdy Azhar
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Nip
                                </div>
                                <div class="col-4">
                                    : 198512272005021001
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Pangkat / Golongan Ruang
                                </div>
                                <div class="col-4">
                                    : Penata Muda Tingkat I, III/b
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Unit Kerja 
                                </div>
                                <div class="col-4">
                                    : Sekretariat Direktorat Jenderal PSDKP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="card">
                        <div class="card-header">Dasar Penggajian Saat Ini</div>
                        <div class="card-body">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Gaji Pokok Lama
                                    </div>
                                    <div class="col-4">
                                        :  Rp. 3.200.000,-
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Atas Dasar
                                    </div>
                                    <div class="col-4">
                                        : SK KGB
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Oleh Pejabat
                                    </div>
                                    <div class="col-4">
                                        : Sekretariat Direktorat Jendral PSDKP
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Tanggal
                                    </div>
                                    <div class="col-4">
                                        : 821/KPTS/BKPP/2021
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Tanggal Mulai Berlaku
                                    </div>
                                    <div class="col-4">
                                        : 01 Juni 2022
                                    </div>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="col-4">
                                        Masa Kerja golongan
                                    </div>
                                    <div class="col-4">
                                        : 16 Tahun 0 Bulan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 <br>
                 <div class="card" style="margin-top:-20px;">
                    <div class="card-header">USULAN KENAIKAN GAJI BERKALA PADA 1 JUNI 2022</div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Gaji Pokok Baru
                                </div>
                                <div class="col-4">
                                    : Rp. 3.400.000,-
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Berdasarkan masa Kerja
                                </div>
                                <div class="col-4">
                                    : 18 tahun 0 Bulan
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Dalam golongan
                                </div>
                                <div class="col-4">
                                    : III/b
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Mulai Tanggal
                                </div>
                                <div class="col-4">
                                    : 1 Juni 2022
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Kenaikan Gaji Berikutnya
                                </div>
                                <div class="col-4">
                                    : 1 Juni 2024
                                </div>
                            </div>
                           <br>
                            <div class="d-flex justify-content-center">
                                <h3><strong class="text-success">KGB Dapat Diproses</strong></h3>
                            </div>
                        </div>
                    </div>
                 </div>
                   <br>
                   <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary">Kembali</button>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Proses</button>      
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
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Tidak</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$router.push('Cetak')">Ya</button>
                    </div>
                    </div>
                </div>
                </div>
                 <!-- End Modal -->
            </div>
        </div>
</div>
   



</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";

export default {
    name: "Rinci",
    
}
</script>

