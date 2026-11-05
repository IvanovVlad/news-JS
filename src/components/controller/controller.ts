import AppLoader from './appLoader';
import { NewsEverythingOptions, NewsEverythingResponse, NewsSourcesOptions, NewsSourcesResponse } from '../../types';

class AppController extends AppLoader {
    private newsAbortController: AbortController;

    constructor() {
        super();
        this.newsAbortController = new AbortController();
    }

    public getSources(callback: (data: NewsSourcesResponse) => void) {
        super.getResp<NewsSourcesResponse, NewsSourcesOptions>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: NewsEverythingResponse) => void) {
        const select = e.currentTarget as HTMLSelectElement | null;
        if (!select?.value) return;
        this.newsAbortController.abort('stale');
        this.newsAbortController = new AbortController();
        super.getResp<NewsEverythingResponse, NewsEverythingOptions>(
            {
                endpoint: 'everything',
                options: {
                    sources: select.value,
                },
            },
            callback,
            this.newsAbortController.signal
        );
    }
}

export default AppController;
