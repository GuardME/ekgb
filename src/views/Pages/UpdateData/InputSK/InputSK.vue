<template>
    <div style="margin-top: -15px; height: 810px;">
        <div class="container">
            <h5 style="margin-left:1%; margin-bottom:0.4em;">Form Tambah SK</h5>
            <div class="card border-dark">
                <div class="card">
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
                                NIP
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
                    <br>
                </div>
                <div class="card-header"><strong>Input SK</strong></div>
                <div class="custom-container">
                    <div class="mb-3 row" style="padding-right: 45%;">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Jenis SK</label>
                    <div class="col-sm-3">
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Pilih</option>
                    <option value="1">KGB</option>
                    <option value="2">...</option>
                    <option value="3">...</option>
                    </select>
                    </div>  
                    </div>
                    <div class="mb-3 row" style="margin-top:-2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Nomor SK</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                    </div>
                    <div class="mb-3 row" style="margin-top:-2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Tanggal</label>
                    <div class="col-sm-3">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-3 row" style="margin-top:-2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Oleh Pejabat</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-2 row" style="margin-top: -2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Pangkat, Golongan/Ruang</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-2 row" style="padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Masa Kerja Golongan</label>
                    <div class="col-sm-3">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                      <div class="col-sm-3">
                    <input type="date" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-3 row" style="padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Gaji Pokok</label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-3 row" style="margin-top:-2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">tanggal mulai berlaku </label>
                    <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputPassword">
                    </div>
                  </div>
                  <div class="mb-3 row" style="margin-top:-2%; padding-right: 45%;">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Upload Dokumen
	                (type file pdf max.2 MB)</label>
                    <div class="col-sm-5">
                    <input type="file" class="form-control" id="inputPassword">
                    </div>
                    <div class="col-sm">
                        <div class="form-check" style="padding-top: 4%;">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Set Default
                        </label>
                        </div>
                    </div>
                  </div>
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
            </div>
        </div>
    
 </div>




</template>

<script>
export default {
    name: "InputSK"
}
</script>

<style>
.custom-container {
  padding: 45px;
}
</style>