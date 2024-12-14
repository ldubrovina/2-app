

import { call, put, takeEvery } from 'redux-saga/effects';
import {LOAD_REVIEWS, loadReviewsError} from './actions';

// Функция для получения отзывов с сервера
const fetchReviewsFromServer = async () => {
    const response = await fetch('https://api.example.com/reviews'); // Замените на ваш URL
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

function* fetchReviews() {
    try {
        const reviews = yield call(fetchReviewsFromServer);
        yield put({ type: LOAD_REVIEWS, payload: reviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        yield put(loadReviewsError(error.message)); // Отправка ошибки в Redux
    }
}

function* mySaga() {
    yield takeEvery(LOAD_REVIEWS, fetchReviews);
}

export default mySaga;

