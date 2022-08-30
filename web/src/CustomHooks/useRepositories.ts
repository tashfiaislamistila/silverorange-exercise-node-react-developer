import { useEffect, useState } from 'react';
export default function useRepositories() {
  const [repos, setRepos] = useState<any>([]);
  const [filteredRepos, setFilteredRepos] = useState<any>([]); //filteredRepos state called to copy the repositories
  useEffect(() => {
    fetch('http://localhost:4000/repos') //fetching data from the api created earlier in A
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a: any, b: any) => {
          return (
            // sorting data in reverse chronological order
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });
        setRepos(sortedData);
        setFilteredRepos(sortedData); //repositories are copied
      });
  }, []);
  return [repos, filteredRepos, setFilteredRepos];
}
