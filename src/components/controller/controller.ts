import AppLoader from './appLoader';
import {
    NewsEverythingOptions,
    NewsEverythingResponse,
    NewsSearchInOptions,
    NewsSourcesOptions,
    NewsSourcesResponse,
} from '../../types';

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
        let target = e.target as HTMLElement | undefined;
        const newsContainer = e.currentTarget as HTMLElement | undefined;
        const parentNode = target?.parentNode as HTMLElement | undefined;
        if (!target || !newsContainer || !parentNode) return;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as NewsSearchInOptions | undefined;
                const containerSourceId = newsContainer.getAttribute('data-source') as NewsSearchInOptions | undefined;
                if (sourceId !== null && sourceId !== undefined && containerSourceId !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsEverythingResponse, NewsEverythingOptions>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = parentNode;
        }
    }
}

export default AppController;
