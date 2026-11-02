export interface NewsErrorResponse {
    status: 'error';
    message: string;
    code: string;
}

export enum NewsSearchInOptions {
    title = 'title',
    description = 'description',
    content = 'content',
}

export interface NewsApiKey {
    apiKey: string;
}

export interface NewsEverythingOptions {
    searchIn?: string;
    sources?: NewsSearchInOptions;
}

export interface NewsEverythingArticleId {
    id: string;
    name: string;
}

export interface NewsEverythingArticle {
    source: NewsEverythingArticleId;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsEverythingSuccess {
    status: 'ok';
    totalResults: number;
    articles: NewsEverythingArticle[];
}

export type NewsEverythingResponse = NewsEverythingSuccess | NewsErrorResponse;

export enum NewsSourceCategory {
    business = 'business',
    entertainment = 'entertainment',
    general = 'general',
    health = 'health',
    science = 'science',
    sports = 'sports',
    technology = 'technology',
}

export enum NewsSourceLanguage {
    ar = 'ar',
    de = 'de',
    en = 'en',
    es = 'es',
    fr = 'fr',
    he = 'he',
    it = 'it',
    nl = 'nl',
    no = 'no',
    pt = 'pt',
    ru = 'ru',
    sv = 'sv',
    ud = 'ud',
    zh = 'zh',
}

export enum NewsSourceCountry {
    ae = 'ae',
    ar = 'ar',
    at = 'at',
    au = 'au',
    be = 'be',
    bg = 'bg',
    br = 'br',
    ca = 'ca',
    ch = 'ch',
    cn = 'cn',
    co = 'co',
    cu = 'cu',
    cz = 'cz',
    de = 'de',
    eg = 'eg',
    fr = 'fr',
    gb = 'gb',
    gr = 'gr',
    hk = 'hk',
    hu = 'hu',
    id = 'id',
    ie = 'ie',
    il = 'il',
    in = 'in',
    it = 'it',
    jp = 'jp',
    kr = 'kr',
    lt = 'lt',
    lv = 'lv',
    ma = 'ma',
    mx = 'mx',
    my = 'my',
    ng = 'ng',
    nl = 'nl',
    no = 'no',
    nz = 'nz',
    ph = 'ph',
    pl = 'pl',
    pt = 'pt',
    ro = 'ro',
    rs = 'rs',
    ru = 'ru',
    sa = 'sa',
    se = 'se',
    sg = 'sg',
    si = 'si',
    sk = 'sk',
    th = 'th',
    tr = 'tr',
    tw = 'tw',
    ua = 'ua',
    us = 'us',
    ve = 've',
    za = 'za',
}

export type NewsSourcesOptions = Partial<{
    category: NewsSourceCategory;
    language: NewsSourceLanguage;
    country: NewsSourceCountry;
}>;

export interface NewsSourcesSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: NewsSourceLanguage;
    country: NewsSourceCountry;
}

export interface NewsSourcesSuccess {
    status: 'ok';
    sources: NewsSourcesSource[];
}

export type NewsSourcesResponse = NewsSourcesSuccess | NewsErrorResponse;
