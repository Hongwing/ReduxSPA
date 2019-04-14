/**
 * 
 * PreviewList redux about
 * 
 */
const initialState = {
    loading: false,
    error: false,
    articleList: []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES'
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS'
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR'

/**
 * action
 */

export const loadArticles = () => {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: 'http://vip.henryhe.cn:7300/mock/5cb158236c31610513d022d0/example/articleList'
    }
}

/**
 * reducer
 */
const previewList = (state = initialState, action) => {
    // console.info(action)
    switch(action.type) {
        case LOAD_ARTICLES: 
            return {
                ...state,
                loading: true,
                error: false,
            }
        case LOAD_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload.data.articleList || [],
            }
        case LOAD_ARTICLES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}

export default previewList;