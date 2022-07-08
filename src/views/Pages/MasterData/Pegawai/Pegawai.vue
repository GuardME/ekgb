<template>
    
</template>

<script>
import axios from "axios";
export default {
    name: "Pegawai",
    data() {
        return {
            pegawai: [],
        }
    },
    async mounted() {
        const {pegawai} = await axios.get('data/pegawai', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('Token')
            },
        });
    },
}
</script>

<style>

</style>