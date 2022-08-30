import useRepositories from '../useRepositories';

export default function Repositories() {
  const [repos] = useRepositories(); //using custom hook for getting all the repositories

  //----------------------------- language -------------------//
  const languages = repos.map((r: { language: any }) => r.language); //making a new array by extracting the language from the repositories
  const uniqueLanguage = languages.filter((lan: any, index: any) => {
    return languages.indexOf(lan) === index;
  });

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
          </tr>
        </thead>
        <tbody>
          {(repos as unknown as any[]).map((repo) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.description}</td>
              <td>{repo.language}</td>
              <td>{repo.forks_count}</td>
              <td>{repo.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="my-5 font-bold">Filter by Language</h1>
      {(uniqueLanguage as unknown as any[]).map((u) => (
        <button key={u} className="mx-5 btn btn-success">
          {u}
        </button>
      ))}
    </div>
  );
}
