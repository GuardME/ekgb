<template>
    <header class="p-3 mb-3 border-bottom bgheader">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white pd bold">E - KGB</a></li>
          <li><router-link to="upload" class="nav-link px-2 text-white pd bold">Update Data</router-link></li>
          <li><router-link to="" class="nav-link px-2 text-white pd">History</router-link></li>
          <li><a href="" class="nav-link px-2 text-white pd">Master Data</a></li>
          <li><a href="" class="nav-link px-2 text-white pd">Manajemen User</a></li>
        </ul>

        <div class="unitk">
          <div class="col text-white">Pengelola Kepegawaian</div>
          <div class="col text-white">Stasiun PSDKP Cilacap</div>
        </div>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
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
  /* background: linear-gradient(#7b7bf5, #0275d8);   */
  background-color: #2B78E4;
  height: 75px;
}
.unitk {
  display: inline;
  margin-right: 35px;
  /* background-color: aliceblue; */
}
</style>