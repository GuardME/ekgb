<template>
    <div>
        <Navbar/>
        <div class="container">
            <h5 style="margin-left:1%;margin-bottom: 1%;">Update Data Pegawai</h5>
            <div class="card border-dark mb-3">
                            <div class="card-body">
                                <div class="container">
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

                        <div class="card-header"><STRONG>DASAR PENGGAJIAN SAAT INI</STRONG></div>
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
                                    : Sekretariat Ditjen PSDKP
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Tanggal 
                                </div>
                                <div class="col-4">
                                    : 1988/PSDKP/III/2022
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Tanggal mulai Berlaku
                                </div>
                                <div class="col-4">
                                    : 01 Juli 2022
                                </div>
                            </div>
                            <div class="row justify-content-start">
                                <div class="col-4">
                                    Masa Kerja Golongan
                                </div>
                                <div class="col-4">
                                    : 16 Tahun 0 Bulan
                                </div>
                            </div>
                        </div>
                        </div>
            </div>
            <button style="margin-bottom: 1%;" class="btn btn-primary" @click="$router.push('inputsk')">Tambah</button>

          <div class="card border-dark">
            <div class="card-body">
                   <table class="table table-bordered">
            <thead class="header-table">
                <tr>
                <th scope="col">Nomor SK</th>
                <th scope="col">Nomor</th>
                <th scope="col">Gol / Ruang</th>
                <th scope="col">MKG</th>
                <th scope="col">TMT</th>
                <th scope="col">Pejabat Penerbit</th>
                <th scope="col">KGB Berikutnya</th>
                <th scope="col">Ket</th>
                </tr>
            </thead>
            <tbody class="text-center justify-content auto-fil" height="125">
                <tr>
                <td>SK KUMDIS</td>
                <td>SKP-841/PSDKP/II/2021</td>
                <td>III/b</td>
                <td>5 thn 0 bln</td>
                <td>01-02-2018</td>
                <td>Menteri KP</td>
                <td>01-02-2022</td>
                <td>Penundaan KGB 2 th</td>
                </tr>
                 <tr>
                <td>SK KP</td>
                <td>SKP-841/PSDKP/II/2021</td>
                <td>III/b</td>
                <td>5 thn 0 bln</td>
                <td>01-02-2018</td>
                <td>Menteri Kelautan dan Perikanan</td>
                <td>01-02-2022</td>
                <td></td>
                </tr>
                <tr>
                <td>SK KGB</td>
                <td>SKP-841/PSDKP/II/2021</td>
                <td>III/b</td>
                <td>5 thn 0 bln</td>
                <td>01-02-2018</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>01-02-2022</td>
                <td>Set Default</td>
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
    name: "RinciPegawai",
    setup() {
        
    },
}
</script>

<style>

</style>