import React from 'react';
import { FiSend } from 'react-icons/fi';

import './textarea.css';

export default function TextArea({ icon, onClick, onChange }) {
  return (
    <div className="container">
      <textarea
        className="textAreaStyle"
        placeholder="Enter your message"
              onChange={onChange}
        />
    </div>
  );
}
