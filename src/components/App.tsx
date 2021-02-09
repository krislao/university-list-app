import React from 'react';
import 'bulma/css/bulma.min.css';
import Universities from './Universities';
import universities from '../json/universities.json'; // TODO: retrieve from API

const App: React.FC = () => {
  return (
    <div className="container">
      <Universities universities={universities} />
    </div>
  );
};

export default App;
