import React, {useState, useEffect} from 'react';
import Editor from '@toast-ui/editor';

import 'codemirror/lib/codemirror.css'; // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

function PostCreate() {
  const initEditor = () => {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '70vh',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue: `# 안녕하세요 \n ## 기본값입니다. \n ### 기본 값이라고!!`
    });
    editor.getHtml();
  };

  useEffect(() => {
    initEditor();
  });

  return (
    <div>
      <label> 에디터 프리뷰 </label>
      <div id="editor"></div>
    </div>
  );
}

export default PostCreate;