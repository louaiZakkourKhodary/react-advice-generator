import React from 'react';
import { useLoadingContext } from '../LoadingContext';

const Loading = () => {
  const { isLoading } = useLoadingContext();

  if (isLoading) {
    return <h2 className='loading'>Loading...</h2>;
  } else {
    return null;
  }
};

export default Loading;
