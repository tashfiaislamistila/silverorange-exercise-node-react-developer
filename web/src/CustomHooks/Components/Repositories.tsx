import useRepositories from '../useRepositories';

export default function Repositories() {
  const [repos] = useRepositories();

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
    </div>
  );
}
