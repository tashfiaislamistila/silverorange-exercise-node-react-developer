import { useEffect, useState } from 'react';
export default function useRepositories() {
  const [repos, setRepos] = useState<any>([]);
  useEffect(() => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);
  return [repos];
}
