/*eslint no-debugger: "off"*/
import React from 'react';
import Universities from './Universities';
import SearchBar from './SearchBar';

import useUniversities from '../hooks/useUniversities';

import 'bulma/css/bulma.min.css';
import 'bulma-extensions/bulma-pageloader/dist/css/bulma-pageloader.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

const App: React.FC = () => {
  const { loading, universities, searchTerm, search } = useUniversities();

  const pageLoaderText = searchTerm
    ? `Searching for: ${searchTerm}`
    : 'Retrieving a list of universities';

  return (
    <>
      <div className={`pageloader ${loading ? 'is-active' : ''}`}>
        <span className="title">{pageLoaderText}</span>
      </div>
      <section className="section">
        <div className="container">
          <SearchBar onSearch={search} disabled={loading} />
          <Universities universities={universities} />
        </div>
      </section>
    </>
  );
};

export default App;
