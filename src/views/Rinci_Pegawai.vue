<template>
    <v-app>
        <div style="background-color: #DCDCDC; height:100%">
        <Navbar/>
        <div class="container">
            <h5>Input Data Pegawai</h5>
            <br>
            <div class="card border-dark mb-3">
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

                        <div class="card-header"><STRONG>DASAR PENGGAJIAN SAAT INI</STRONG></div>
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
                                    : Sekretariat Ditjen PSDKP
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Tanggal 
                                </div>
                                <div class="col">
                                    : 1988/PSDKP/III/2022
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Tanggal mulai Berlaku
                                </div>
                                <div class="col">
                                    : 01 Juli 2022
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    Masa Kerja Golongan
                                </div>
                                <div class="col">
                                    : 16 Tahun 0 Bulan
                                </div>
                            </div>
                        </div>
                        </div>
            </div>
            <br>
            <button class="btn btn-primary" @click="$router.push('inputsk')">Tambah</button>
            <br>
            <br>
          <div class="card border-dark">
            <div class="card-body">
                   <table class="table table-bordered">
                
            <thead>
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
            <tbody>
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
    </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {Navbar},
}
</script>