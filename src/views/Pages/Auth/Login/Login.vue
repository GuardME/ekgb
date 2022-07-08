<template>
<div>
<NavbarLogin/>
<section class="vh-100" style="background-color: white;">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="Login">
         <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">NIP / Email</label>
        <input v-model="email" type="text" class="form-control" placeholder="Masukkan NIP / Email Anda">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="*****">
        </div>
          <div class="text-lg-end mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>

</div>


</template>

<script>
import axios from "axios"
import NavbarLogin from "@/components/NavbarLogin.vue"

export default {
    name: "Login",
    components: {
        NavbarLogin
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async Login() {
            const response = await axios.post('login', {
                email: this.email,
                password: this.password
            });
            localStorage.setItem('Token', response.data.access_token);
            await this.$router.push('/')
        }
    }
}

</script>

<style>

.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: white;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>