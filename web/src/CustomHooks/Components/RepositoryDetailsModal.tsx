import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function RepositoryDetailsModal(props: any) {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const { updated_at, full_name } = props;
  //---------------------------Readme---------------------------->
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState<any>('');
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${full_name}/master/README.md`)
      .then((res) => {
        return res.text();
      })
      .then((text) => setContent(text));
  }, [full_name]);
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
          <h2 className="font-bold">Read Me Markdown:</h2>
          <ReactMarkdown children={content} />
        </div>
      </div>
    </div>
  );
}
