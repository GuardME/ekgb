<template>
    <header class="p-3 mb-3 border-bottom bgheader">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
         <img src="@/assets/logo_psdkp.png" class="bi me-2" width="50" height="50">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 bgheader">
          <li><a  class="nav-link px-2 text-white bold pd">E - KGB</a></li>
         </ul>
        </div>
      </div>
    
    </header>
</template>

<script>
export default {
    name: "NavbarLogin"
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
  height: auto;
}
.unitk {
  display: inline;
  margin-right: 35px;
  /* background-color: aliceblue; */
}
</style>