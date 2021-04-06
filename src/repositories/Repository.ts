import axios, { AxiosInstance } from 'axios'

abstract class Repository {
    private _client: AxiosInstance = axios;

    get client(): AxiosInstance {
        return this._client;
    }
}

export default Repository;