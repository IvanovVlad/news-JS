import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process?.env?.API_URL;
        const apiKey = process?.env?.API_KEY;
        if (!apiUrl || !apiKey) {
            throw new Error('failed to start app, missing API config');
        }
        super(apiUrl, { apiKey });
    }
}

export default AppLoader;
