<template>
    <div class="alert alert-danger text-center">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventBusService from '@/service/EventBusService'

@Options({
    props: [
        'message'
    ]
})

export default class Error extends Vue {

    mounted() {
        setTimeout(() => {
            EventBusService.publish('remove-error');
        }, 3000);
    }
}
</script>

<style lang="scss" scoped>
    
</style>
