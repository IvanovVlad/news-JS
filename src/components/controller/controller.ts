import AppLoader from './appLoader';
import { NewsEverythingOptions, NewsEverythingResponse, NewsSourcesOptions, NewsSourcesResponse } from '../../types';

class AppController extends AppLoader {
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

        super.getResp<NewsEverythingResponse, NewsEverythingOptions>(
            {
                endpoint: 'everything',
                options: {
                    sources: select.value,
                },
            },
            callback
        );
    }
}

export default AppController;
