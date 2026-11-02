import { NewsApiKey } from '../../types';

export interface LoaderRequest<O> {
    endpoint: string;
    options?: O;
}

export type LoaderCallback<R> = (data: R) => void;

class Loader {
    private readonly baseLink: string;
    private readonly options: NewsApiKey;

    constructor(baseLink: string, options: NewsApiKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<R, O>(
        { endpoint, options = {} as O }: LoaderRequest<O>,
        callback: LoaderCallback<R> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl<O>(options: O, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof O]}&`;
        });

        return url.slice(0, -1);
    }

    private load<R, O>(method: string, endpoint: string, callback: LoaderCallback<R>, options: O = {} as O) {
        const url = this.makeUrl(options, endpoint);
        fetch(url, { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json() as R)
            .then((data: R) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
