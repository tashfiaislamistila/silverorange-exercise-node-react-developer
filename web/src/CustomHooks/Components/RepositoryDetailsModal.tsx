import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function RepositoryDetailsModal(props: any) {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const { updated_at, full_name } = props;
  //---------------------------Readme---------------------------->
  const [content, setContent] = useState<any>('');
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${full_name}/master/README.md`)
      .then((res) => {
        return res.text();
      })
      .then((text) => setContent(text));
  }, [full_name]);

  //---------------------------Retrieving Sha---------------------------->
  const [sha, setSha] = useState<any>({});
  useEffect(() => {
    fetch(`https://api.github.com/repos/${full_name}/git/trees/master`)
      .then((res) => res.json())
      .then((data) => setSha(data?.sha));
  }, [full_name]);
  //---------------------------Retrieving Commit Details---------------------------->
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    fetch(`https://api.github.com/repos/${full_name}/git/commits/${sha}`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data?.message);
        setAuthor(data?.author?.name);
      });
  }, [full_name, sha]);

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Repository Details</h3>
          <h1>
            Author Name: <span className="font-bold">{author}</span>
          </h1>
          <p>
            Commit Message: <span className="font-bold">{message}</span>
          </p>
          <p className="py-4">
            Recent Commit: <span className="font-bold">{updated_at}</span>
          </p>
          <h2 className="font-bold">Read Me Markdown:</h2>
          <ReactMarkdown children={content} />
        </div>
      </div>
    </div>
  );
}
