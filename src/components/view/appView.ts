import News from './news/news';
import Sources from './sources/sources';
import { NewsEverythingResponse, NewsSourcesResponse } from '../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsEverythingResponse) {
        if (data.status === 'ok') {
            const values = data?.articles ?? [];
            this.news.draw(values);
        }
    }

    public drawSources(data: NewsSourcesResponse) {
        if (data.status === 'ok') {
            const values = data?.sources ?? [];
            this.sources.draw(values);
        }
    }
}

export default AppView;
