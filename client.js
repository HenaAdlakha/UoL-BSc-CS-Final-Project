import config from "./config"
const axios = require("axios")

class FastAPIClient {
    constructor(overrides) {
        this.config = {
            ...config,
            ...overrides,
        }

        this.apiClient = this.getApiClient(this.config)
    }
    getApiClient(config) {
        let initialConfig = {
            baseURL: `${config.apiBasePath}`,
        }
        let client = axios.create(initialConfig)
        return client
    }

    //actions
    getWelcomeMessage() {
        return this.apiClient.get('/').then(({data})=>{return data})
    }
    getTruth() {
        return this.apiClient.get('/banana').then(({data})=>{return data})
    }
}

export default FastAPIClient;