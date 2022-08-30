import { useState } from 'react';
import useRepositories from '../useRepositories';
import RepositoryDetailsModal from './RepositoryDetailsModal';

export default function Repositories() {
  const [repos, filteredRepos, setFilteredRepos] = useRepositories(); //using custom hook for getting all the repositories

  //----------------------------- language -------------------//
  const languages = (repos as unknown as any[]).map(
    (r: { language: any }) => r.language
  ); //making a new array by extracting the language from the repositories
  const uniqueLanguage = languages.filter((lan: any, index: any) => {
    return languages.indexOf(lan) === index;
  });

  const [selectedLanguage, setSelectedLanguage] = useState(''); //state for saving the state after clicking the button
  const handleLanguageChange = (event: any) => {
    //language is saved in the state
    setSelectedLanguage(event.currentTarget.value);
    console.log(selectedLanguage);

    const filteredLanguageRepo = (repos as unknown as any[]).filter((repo) => {
      //new array is created with the data of the specific filtered language
      return repo.language === event.currentTarget.value;
    });
    setFilteredRepos(filteredLanguageRepo);
  };
  //----------------------------- modal -------------------//
  const [selectedRepo, setSelectedRepo] = useState<any>({});

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Repository Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Fork Count</th>
            <th>Created</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {(filteredRepos as unknown as any[]).map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.description}</td>
              <td>{repo.language}</td>
              <td>{repo.forks_count}</td>
              <td>{repo.created_at}</td>
              <td>
                <label
                  onClick={() => setSelectedRepo(repo)}
                  htmlFor="my-modal-3"
                  className="btn btn-success"
                >
                  Details
                </label>
              </td>
            </tr>
          ))}
          {selectedRepo && (
            <RepositoryDetailsModal key={selectedRepo.id} {...selectedRepo} />
          )}
        </tbody>
      </table>
      <h1 className="my-5 font-bold">Filter by Language</h1>
      {(uniqueLanguage as unknown as any[]).map((u) => (
        //unique languages are mapped and displayed one after another
        <button
          key={u}
          value={u}
          onClick={handleLanguageChange} //event handler added to call the function
          className="mx-5 btn btn-success"
        >
          {u}
        </button>
      ))}
    </div>
  );
}
