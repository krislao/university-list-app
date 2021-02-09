/*eslint no-debugger: "off"*/
import React, { useEffect } from 'react';
import useUniversities from '../hooks/useUniversities';
import Universities from './Universities';
// import universities from '../json/universities.json';

import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

const App: React.FC = () => {
  const [universities, search] = useUniversities();

  useEffect(() => {
    search();
  }, [search]);

  return (
    <section className="section">
      <div className="container">
        <Universities universities={universities} />
      </div>
    </section>
  );
};

export default App;
