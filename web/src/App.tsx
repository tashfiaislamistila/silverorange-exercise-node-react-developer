import Repositories from './CustomHooks/Components/Repositories';

export function App() {
  return (
    <div>
      <h1 className="font-bold text-cyan-600 text-center text-3xl my-5">
        List of Repositories
      </h1>
      <div className="text-center flex justify-center">
        <Repositories />
      </div>
    </div>
  );
}
