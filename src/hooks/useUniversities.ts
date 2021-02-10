/*eslint no-debugger: "off"*/
import { useState, useCallback } from 'react';
import type { UniversityType } from '../components/University';
import hipoLabs from '../apis/hipoLabs';

const useUniversities = (): {
  loading: boolean;
  searchTerm?: string;
  universities: Array<UniversityType>;
  search: (term?: string) => Promise<void>;
} => {
  const [universities, setUniversities] = useState<Array<UniversityType>>([]);
  const [searchTerm, setSearchTerm] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);

  const search = async (term?: string) => {
    setSearchTerm(term);
    setLoading(true);

    const { data: universities } = await hipoLabs.get('/search', {
      params: {
        name: term,
      },
    });

    setLoading(false);
    setUniversities(universities as Array<UniversityType>);
  };
  return {
    loading,
    universities,
    searchTerm,
    search: useCallback(search, []),
  };
};

export default useUniversities;
