import React from 'react';
import University from './University';
import type { UniversityType } from './University';
import { toKebabCase } from '../utilities/convertStringCase';

type Props = {
  universities: Array<UniversityType>;
};

const Universities: React.FC<Props> = ({ universities }: Props) => {
  const renderedList = universities.map((university: UniversityType) => {
    const key = toKebabCase(`${university.alpha_two_code} ${university.name}`);
    return <University key={key} university={university} />;
  });

  return <div>{renderedList}</div>;
};

export default Universities;
