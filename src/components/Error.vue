<template>
    <div class="alert alert-danger text-center">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventBusService from '@/services/EventBusService'

@Options({
    props: [
        'message'
    ]
})

export default class Error extends Vue {

    mounted() {
        setTimeout(() => {
            EventBusService.publish('remove-error', 'App');
        }, 3000);
    }
}
</script>