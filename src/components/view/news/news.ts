import './news.css';
import { NewsEverythingSuccess } from '../../../types';
import { formatDate, safeSelect } from '../../../utils';

class News {
    public draw(data: NewsEverythingSuccess['articles']) {
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement | undefined;
        if (!newsItemTemp) return;

        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();

        news.forEach((item, idx) => {
            const newsClone = document.importNode(newsItemTemp.content, true);

            if (idx % 2) safeSelect(newsClone, '.news__item').classList.add('alt');

            safeSelect(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            safeSelect(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            safeSelect(newsClone, '.news__meta-date').textContent = formatDate(item.publishedAt);

            safeSelect(newsClone, '.news__description-title').textContent = item.title;
            safeSelect(newsClone, '.news__description-source').textContent = item.source.name;
            safeSelect(newsClone, '.news__description-content').textContent = item.description;
            safeSelect(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsRef = safeSelect(document, '.news');
        newsRef.innerHTML = '';
        newsRef.appendChild(fragment);
    }
}

export default News;
