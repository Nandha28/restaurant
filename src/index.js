import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage/LoginPage';

const App = () => {
  return (
    <div className="app">
      <LoginPage />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
