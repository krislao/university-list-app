import React from 'react';
import Flag from 'react-world-flags';
import styles from './University.module.css';

export type UniversityType = {
  domains: Array<string>;
  web_pages: Array<string>;
  'state-province': null | string;
  alpha_two_code: string;
  name: string;
  country: string;
};

type Props = {
  university: UniversityType;
};

const University: React.FC<Props> = ({ university }: Props) => {
  const renderedWebpages = university.web_pages.map((webPage, index) => (
    <li key={index} className="is-inline-flex">
      <span className="icon mx-1">
        <i className="fas fa-globe"></i>
      </span>
      <a href={webPage} target="_blank" rel="noreferrer">
        {university.name}
      </a>
    </li>
  ));

  return (
    <div className={`box ${styles.container}`}>
      <header className="is-flex is-flex-direction-row is-align-items-center">
        <p className="is-size-6 has-text-weight-bold mr-2">{university.name}</p>
        <span
          className={`is-flex is-flex-shrink-0 ${styles.countryFlag}`}
          title={university.country}
        >
          <Flag code={university.alpha_two_code} width={32} />
        </span>
      </header>
      <div className={`content ${styles.content}`}>
        <ul className={`fa-ul ${styles.webPages}`}>{renderedWebpages}</ul>
      </div>
    </div>
  );
};

export default University;
