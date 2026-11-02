import './sources.css';
import { safeSelect } from '../../../utils';

export interface SourcesItem {
    name: string;
    id: string;
}

class Sources {
    public draw(data: SourcesItem[]) {
        const sourcesRef = safeSelect(document, '.sources');
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = safeSelect<HTMLTemplateElement>(document, '#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = document.importNode(sourceItemTemp.content, true);
            const option = safeSelect<HTMLOptionElement>(sourceClone, '.source__item');

            option.textContent = item.name;
            option.value = item.id;

            fragment.append(sourceClone);
        });

        sourcesRef.append(fragment);
    }
}

export default Sources;
