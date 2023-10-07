<template>
    <div class="memorial-specified-time">
        <div class="container">
            <div class="left">
                <h1>Belgilangan davdagi yodgorlik ko'rinishi</h1>
                <ul>
                    <li :class="{active: i == 2}" v-for="(li, i) in 7" :key="i">Sed ut perspiciatis unde omnis</li>
                </ul>
            </div>
            <div class="right">
                <img src="https://picsum.photos/640/540" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>