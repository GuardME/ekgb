<template>
    <div>
        <Navbar/>

        <div class="container">
            <h3>Input Data Pegawai</h3>
            <br>
            <div class="card">
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
                        <hr>
                        <div class="card-header"><STRONG>DASAR PENGGAJIAN SAAT INI</STRONG></div>
                        <hr>
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
                        </div>
            </div>
            <br>
            <button class="btn btn-outline-secondary" @click="$router.push('inputsk')">Tambah</button>
            <br>
            <br>
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
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {Navbar},
}
</script>