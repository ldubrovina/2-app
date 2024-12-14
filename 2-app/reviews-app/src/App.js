import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReviewTable from './components/ReviewTable';
import ReviewFilters from './components/ReviewFilters';
import { loadReviews } from './redux/actions';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviews());
    // Здесь можно также добавить логику для подгрузки новых отзывов.
    // Например через setInterval или при прокрутке страницы.

  }, [dispatch]);

  return (
      <div className="App">
        <h1>Отзывы</h1>
        <ReviewFilters />
        <ReviewTable />
      </div>
  );
};

export default App;
