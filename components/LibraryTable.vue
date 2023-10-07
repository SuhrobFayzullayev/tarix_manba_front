<template>
    <div class="library-table">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Adabiyot</th>
                    <th>Resur turi</th>
                    <th>Yil</th>
                    <th>Davlat</th>
                    <th>Tili</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in 4" :key="i">
                    <td>{{i + 1}}</td>
                    <td class="">
                        <p class="text">Lorem ipsum</p>
                        <p class="author">Mualliflar: <span>John Doe</span></p>
                    </td>
                    <td>Badiy adabiyot</td>
                    <td>1870</td>
                    <td>Andijon</td>
                    <td>Arab</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>