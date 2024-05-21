import { useState } from 'react';
import Warning from './Warning';

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningRext] = useState('');

  function handleChange(e) {
    let newText = e.target.value;
    setText(newText);
    if (newText.includes('<script>')) {
      newText = newText.replace('<script>', '');

      setWarningRext('No script tag allowed!');
    } else if (newText.includes('@')) {
      newText = newText.replace('@', '');
      setWarningRext('No @ symbol allowed!');
    } else {
      setWarningRext('');
    }
    setText(newText);
  }

  return (
    <div className="textarea ">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text..."
        spellCheck="false"
      ></textarea>
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
};

export default Textarea;
