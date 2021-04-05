<template>
    <div class="loader"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Loader extends Vue {}
</script>

<style lang="scss" scoped>
    .loader {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #313233;
        width: 2rem;
        height: 2rem;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
