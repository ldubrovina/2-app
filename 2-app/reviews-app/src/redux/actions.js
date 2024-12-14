export const LOAD_REVIEWS = 'LOAD_REVIEWS';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_SORT = 'SET_SORT';

export const loadReviews = () => ({ type: LOAD_REVIEWS });
export const setFilters = (filters) => ({ type: SET_FILTERS, filters });
export const setSort = (sort) => ({ type: SET_SORT, sort });


export const LOAD_REVIEWS_ERROR = 'LOAD_REVIEWS_ERROR';

export const loadReviewsError = (error) => ({ type: LOAD_REVIEWS_ERROR, error });

