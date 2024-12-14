import { LOAD_REVIEWS, LOAD_REVIEWS_ERROR, SET_FILTERS, SET_SORT } from './actions';

const initialState = {
    reviews: [],
    filteredReviews: [],
    filters: {
        platform: '',
        minRating: '',
        maxRating: ''
    },
    sortByDateAscend: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                filteredReviews: action.payload // Сбросить отфильтрованные отзывы при загрузке новых
            };

        case LOAD_REVIEWS_ERROR:
            return {
                ...state,
                error: action.error
            };

        case SET_FILTERS:
            const updatedFilters = { ...state.filters, ...action.filters };

            // Преобразование строковых значений в числа для сравнения
            const minRating = parseFloat(updatedFilters.minRating) || 0; // По умолчанию 0
            const maxRating = parseFloat(updatedFilters.maxRating) || Infinity; // По умолчанию бесконечность

            const filteredReviews = (state.reviews || []).filter(review => {
                const matchesPlatform = updatedFilters.platform ? review.platform === updatedFilters.platform : true;
                const matchesMinRating = review.rating >= minRating;
                const matchesMaxRating = review.rating <= maxRating;

                return matchesPlatform && matchesMinRating && matchesMaxRating;
            });

            return {
                ...state,
                filters: updatedFilters,
                filteredReviews // Обновляем отфильтрованные отзывы
            };

        case SET_SORT:
            const sortedReviews = [...(state.filteredReviews || [])].sort((a, b) => {
                if (action.sort === 'dateAscend') {
                    return new Date(a.date) - new Date(b.date);
                } else if (action.sort === 'dateDescend') {
                    return new Date(b.date) - new Date(a.date);
                } else if (action.sort === 'ratingAscend') {
                    return a.rating - b.rating;
                } else if (action.sort === 'ratingDescend') {
                    return b.rating - a.rating;
                }
                return 0; // Если сортировка не задана
            });

            return {
                ...state,
                sortByDateAscend: action.sort === 'dateAscend', // Сохраняем текущее состояние сортировки
                filteredReviews: sortedReviews // Обновляем отсортированные отзывы
            };

        default:
            return state;
    }
};

export default reducer;
