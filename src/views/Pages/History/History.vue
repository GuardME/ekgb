<template>
    <div>

    <br>
    <div class="container">
                 <h5 style="margin-left: 1%; padding-bottom: 1%">History</h5>
    <div class="card">
            <div class="card-body">
                <table class="table table-bordered text-center" height="200">
            <thead class="header-table">
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">Unit Kerja</th>
                <th scope="col">Gol</th>
                <th scope="col">Dasar SK</th>
                <th scope="col">Nomor</th>
                <th scope="col">TMT KGB Berkala</th>
                <th scope="col">Masa Kerja</th>
                <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>12/2093/PSDKP</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">View</button></td>
                </tr>
                <tr>
                <td>Verdy Azhar</td>
                <td>Sekretariat Ditjen PSDKP</td>
                <td>III/b</td>
                <td>KGB</td>
                <td>12/2093/PSDKP</td>
                <td>01-06-2022</td>
                <td>17 th 2 bln</td>
                <td><button class="btn btn-primary" @click="$router.push('rinci')">View</button></td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>