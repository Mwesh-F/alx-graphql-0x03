import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary'; // ✅ Use relative path
import ErrorProneComponent from '../components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;
