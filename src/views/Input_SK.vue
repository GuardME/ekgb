<template>
    <div>
        <Navbar/>
           <br>
        <br>
        <div class="container">
            <h3>Input SK KGB</h3>
            <br>
            <div class="card">
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
                                NIP
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
                    <br>
                </div>
                <div class="card-header"><strong>Input SK</strong></div>
                <div class="custom-container">
                    <br>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Jenis SK</label>
                    <div class="col-sm-6">
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Pilih</option>
                    <option value="1">KGB</option>
                    <option value="2">...</option>
                    <option value="3">...</option>
                    </select>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Nomor SK</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Tanggal</label>
                    <div class="col-sm-6">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Oleh Pejabat</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Pangkat, Golongan/Ruang</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Masa Kerja Golongan</label>
                    <div class="col-sm-3">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                      <div class="col-sm-3">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Gaji Pokok</label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                   <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">tanggal mulai berlaku </label>
                    <div class="col-sm-6">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Upload Dokumen
	                (type file pdf max.2 MB)</label>
                    <div class="col-sm-6">
                    <input type="file" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <br>
                  <br>
                  <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    components: {Navbar}
}
</script>