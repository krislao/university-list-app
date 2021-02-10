/*eslint no-debugger: "off"*/
import React, { useState, useEffect, ChangeEvent } from 'react';

type Props = {
  disabled: boolean;
  onSearch: (term?: string) => Promise<void>;
};

const SearchBar: React.FC<Props> = ({ onSearch, disabled }: Props) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm !== '') {
      onSearch(debouncedTerm);
    } else {
      onSearch();
    }
  }, [debouncedTerm, onSearch]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <form className="mb-5">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Search by name:</label>
        </div>
        <div className="field-body">
          <div className="field is-flex-grow-0">
            <input
              className="input"
              type="text"
              placeholder="University name"
              value={term}
              onChange={onInputChange}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
