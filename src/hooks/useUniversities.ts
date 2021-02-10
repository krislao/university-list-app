/*eslint no-debugger: "off"*/
import { useState, useCallback } from 'react';
import type { UniversityType } from '../components/University';
import hipoLabs from '../apis/hipoLabs';

const useUniversities = (): [Array<UniversityType>, (term?: string) => Promise<void>] => {
  const [universities, setUniversities] = useState<Array<UniversityType>>([]);

  const search = async (term?: string) => {
    const { data: universities } = await hipoLabs.get('/search', {
      params: {
        name: term,
      },
    });
    setUniversities(universities as Array<UniversityType>);
  };
  return [universities, useCallback(search, [])];
};

export default useUniversities;
