import React from 'react';

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

const UniversityType: React.FC<Props> = ({ university }: Props) => {
  return <div>{university.name}</div>;
};

export default UniversityType;
