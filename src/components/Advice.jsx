import React, { useEffect, useState } from 'react';
import { useLoadingContext } from '../LoadingContext';

const Advice = ({ fetchAdvice, url }) => {
  const { advice, adviceId } = useLoadingContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchAdvice(url); // Call the fetchAdvice function passed as a prop
  }, [fetchAdvice, url]);

  useEffect(() => {
    // Update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main>
      <div className='container'>
        <h2 className='advice-title'>Advice #{adviceId}</h2>
        <p className='advice-text'>{advice}</p>
        <div className='divider'>
          {screenWidth >= 720 ? (
            <svg width='444' height='16' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
                <g transform='translate(212)' fill='#CEE3E9'>
                  <rect width='6' height='16' rx='3' />
                  <rect x='14' width='6' height='16' rx='3' />
                </g>
              </g>
            </svg>
          ) : (
            <svg width='295' height='16' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
                <g transform='translate(138)' fill='#CEE3E9'>
                  <rect width='6' height='16' rx='3' />
                  <rect x='14' width='6' height='16' rx='3' />
                </g>
              </g>
            </svg>
          )}
        </div>
        <div className='btn-container'>
          <button onClick={() => fetchAdvice(url)}>
            <div className='svg'>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill='green'
                style={{ backgroundColor: 'transparent' }} /* Add this line */
              >
                <path
                  d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
                  fill='black'
                  rx='8'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Advice;
