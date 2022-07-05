<template>
    <div>
    <Navbar />
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    components: {
        Navbar
    }
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