import axios, { AxiosInstance } from 'axios'

abstract class ModelService {
    private _client: AxiosInstance = axios;

    get client(): AxiosInstance {
        return this._client;
    }
}

export default ModelService;