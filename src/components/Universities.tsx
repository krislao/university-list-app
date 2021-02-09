import React from 'react';
import University from './University';
import type { UniversityType } from './University';
import { toKebabCase } from '../utilities/convertStringCase';

type Props = {
  universities: Array<UniversityType>;
};

const Universities: React.FC<Props> = ({ universities }: Props) => {
  const renderedList = universities.map((university: UniversityType, index) => {
    const key = toKebabCase(`${index} ${university.name}`);
    return (
      <div key={key} className="column is-one-quarter">
        <University key={key} university={university} />
      </div>
    );
  });

  return <div className="columns is-flex-wrap-wrap">{renderedList}</div>;
};

export default Universities;
