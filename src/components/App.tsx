/*eslint no-debugger: "off"*/
import React from 'react';
import Universities from './Universities';
import SearchBar from './SearchBar';

import useUniversities from '../hooks/useUniversities';

import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

const App: React.FC = () => {
  const [universities, search] = useUniversities();

  return (
    <section className="section">
      <div className="container">
        <SearchBar onSearch={search} />
        <Universities universities={universities} />
      </div>
    </section>
  );
};

export default App;
