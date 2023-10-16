import './index.css';
import Loading from './components/Loading';
import Advice from './components/Advice';
import { useLoadingContext } from './LoadingContext';
import { useEffect, useCallback } from 'react';

const url = 'https://api.adviceslip.com/advice';

function App() {
  const { isLoading, setIsLoading, setAdvice, setAdviceId } =
    useLoadingContext();

  const fetchAdvice = useCallback(
    async (url) => {
      const request = await fetch(url);
      const response = await request.json();
      setAdvice(response.slip.advice);
      setAdviceId(response.slip.id);
    },
    [setAdvice, setAdviceId]
  );

  useEffect(() => {
    fetchAdvice(url);
    setIsLoading(false);
  }, [fetchAdvice, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Advice fetchAdvice={fetchAdvice} setAdvice={setAdvice} url={url} />
    </>
  );
}

export default App;
