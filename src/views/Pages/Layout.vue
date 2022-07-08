<template>
    <div>
    <Navbar />
        <router-view/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { Auth } from '@/models/Auth'
import axios from 'axios'

export default {
    components: {
        Navbar
    },
    data() {
        return {
            user: new Auth()
        }
    },
    // async mounted() {
    //     try {
    //     const {response} = await axios.get('user-profile', {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('Token')
    //         },
    //     });
    //     await this.$store.dispatch('SET_USER', response);
    //     console.log('data user:', response);
    //     this.user = response;
    //     } catch (error) {
    //         await this.$router.push('/Login')
    //         console.log('error login :', error )
    //     }
    // }
}
</script>

<style>
body {
  height: 100%;
}
body {
  background-color: #f5f5f5f5;
}
</style>