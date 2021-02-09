/*eslint no-debugger: "off"*/
import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import useUniversities from '../hooks/useUniversities';
import Universities from './Universities';

const App: React.FC = () => {
  const [universities, search] = useUniversities();

  useEffect(() => {
    debugger;
    search();
  }, [search]);

  return (
    <div className="container">
      <Universities universities={universities} />
    </div>
  );
};

export default App;
