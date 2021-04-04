import axios, { AxiosInstance } from 'axios'

abstract class Repository {
    private axios: AxiosInstance = axios;

    get getAxios(): AxiosInstance {
        return this.axios;
    }
}

export default Repository;