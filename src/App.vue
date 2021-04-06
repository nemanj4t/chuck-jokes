<template>
    <Error v-if="error" :message="errorMessage" />
    <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EventBusService from '@/service/EventBusService';
import Error from '@/components/Error.vue';

@Options({
    components: {
        Error
    }
})

export default class App extends Vue {

    public error = false;
    public errorMessage = "";

    mounted() {
        EventBusService.subscribe('error', this.errorCallback, 'App');
        EventBusService.subscribe('remove-error', this.removeErrorCallback, 'App');
    }

    beforeUnmount() {
        EventBusService.unsubscribe('error', 'App');
        EventBusService.unsubscribe('remove-error', 'App');
    }

    public errorCallback(payload?: any) {
        this.errorMessage = payload;
        this.error = true;
    }

    public removeErrorCallback() {
        this.errorMessage = "";
        this.error = false;
    }
}
</script>

