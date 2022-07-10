<template>
<header class="p-3 mb-3 border-bottom bgheader">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
         <img src="@/assets/logo_psdkp.png" class="bi me-2" width="70" height="70">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 bgheader">
          <li><a href="/" class="nav-link px-2 text-white bold pd">E - KGB</a></li>
          <li class="nav-item"><router-link to="/dashboardSK" class="nav-link px-2 text-white bold pd">Update Data</router-link></li>
          <li><router-link to="/History" class="nav-link px-2 text-white bold pd">History</router-link></li>

          <li class="nav-item dropdown">
            <a class="nav-link px-2 text-white bold pd" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Master Data</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
              <li><router-link class="dropdown-item" to="/UnitKerja">Unit Kerja</router-link></li>
              <li><router-link class="dropdown-item" to="/Pegawai">Pegawai</router-link></li>
            </ul>
          </li>
          <li><a href="" class="nav-link px-2 text-white bold pd">Manajemen User</a></li>

          </ul>

          <div class="unitk pd">
          <div class="col text-white">Pengelola Kepegawaian</div>
          <div class="col text-white">Stasiun PSDKP Cilacap</div>
          </div>

        <div class="dropdown text-end pd">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
         
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
.pd {
  display: flex;
  /* background-color: #f5f5f5; */
  margin-right: 50px;
}
.bgheader {
  background: linear-gradient(#7b7bf5, #0275d8);  
  /* background-color: #2B78E4; */
}
.unitk {
  display: inline;
  margin-right: 35px;
  /* background-color: aliceblue; */
}
</style>