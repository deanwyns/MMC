export class AbstractService {

    protected baseUrl: string;
    protected apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    get(url: string, params?: Object = {}) {
        params[this.getApiKeyParam()] = this.apiKey;
        return HTTP.get(this.baseUrl.concat(url), { params: params });
    }

    protected getApiKeyParam() {
        return "api_key";
    }

}