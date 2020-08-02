import React from 'react';

import PostCreate from '../Post/PostCreate';
import PostHead from '../Post/PostHead';
import PostTemplate from '../Post/PostTemplate';

function PostView() {
  return (
    <>
      <PostTemplate>
        <PostHead />
        <PostCreate />
      </PostTemplate>
    </>
  );
}

export default PostView;