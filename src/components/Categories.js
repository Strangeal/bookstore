import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catStatus } from '../redux/categories/categories';

const Categories = () => {
  const statusCheck = useSelector((state) => (state.categories));
  const dispatch = useDispatch();
  return (
    <div>
      <p>{statusCheck}</p>
      <button type="submit" onClick={() => dispatch(catStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
