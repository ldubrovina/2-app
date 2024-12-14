import React from 'react';
import { useSelector } from 'react-redux';

const ReviewTable = () => {
    const filteredReviews = useSelector(state => state.filteredReviews);

    // Проверяем наличие filteredReviews и его тип
    if (!filteredReviews || !Array.isArray(filteredReviews)) {
        return <div>Отзывы не найдены</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Платформа</th>
                <th>Рейтинг</th>
                <th>Время добавления</th>
                <th>Текст отзыва</th>
            </tr>
            </thead>
            <tbody>
            {filteredReviews.length > 0 ? (
                filteredReviews.map(review => (
                    <tr key={review.id}>
                        <td>{review.platform}</td>
                        <td>{review.rating}</td>
                        <td>{new Date(review.date).toLocaleString()}</td>
                        <td>{review.text}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="4">Отзывов нет.</td> {/* Используем colSpan для объединения ячеек */}
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default ReviewTable;
