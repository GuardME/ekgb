<template>
    <div>
        <Navbar/>
        <div class="container">
            <h3>Form Tambah SK</h3>
            
            <div class="card border-dark">
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
                <div class="card-header border-dark"><strong>Input SK</strong></div>
                <div class="container">
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
                    <div class="col-sm-3">
                    <input type="file" class="form-control" id="inputPassword">
                    <input type="radio-button">
                    </div>
                  </div>
                  <br>
                  <br>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
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
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$router.push('AlertSuccess')">Ya</button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <br>
            </div>
        </div>
    <br>
    <br>
 
 
 </div>




</template>

<script>
export default {
    name: "InputSK"
}
</script>

<style>

</style>