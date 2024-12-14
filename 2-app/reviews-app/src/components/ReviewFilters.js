import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, setSort } from '../redux/actions';

const ReviewFilters = () => {
    const dispatch = useDispatch();

    // Локальное состояние для хранения значений фильтров и сортировки
    const [filters, setFilterValues] = useState({
        platform: '',
        minRating: '',
        maxRating: ''
    });

    const [sortBy, setSortBy] = useState(''); // Состояние для сортировки

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyFilters = () => {
        dispatch(setFilters(filters)); // Применение фильтров
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortBy(value);
        dispatch(setSort(value)); // Применение сортировки
    };

    return (
        <div>
            <h2>Фильтры</h2>
            <select name="platform" onChange={handleFilterChange}>
                <option value="">Все платформы</option>
                <option value="Google">Google</option>
                <option value="Яндекс">Яндекс</option>
                <option value="2ГИС">2ГИС</option>
            </select>

            <input
                type="number"
                name="minRating"
                placeholder="Минимальный рейтинг"
                onChange={handleFilterChange}
            />
            <input
                type="number"
                name="maxRating"
                placeholder="Максимальный рейтинг"
                onChange={handleFilterChange}
            />

            {/* Кнопка для применения фильтров */}
            <button onClick={handleApplyFilters}>Применить фильтры</button>

            <h2>Сортировка</h2>
            <select onChange={handleSortChange}>
                <option value="">Выберите сортировку</option>
                <option value="dateAscend">По времени (новые сначала)</option>
                <option value="dateDescend">По времени (старые сначала)</option>
                <option value="ratingAscend">По оценке (по возрастанию)</option>
                <option value="ratingDescend">По оценке (по убыванию)</option>
            </select>
        </div>
    );
};

export default ReviewFilters;
