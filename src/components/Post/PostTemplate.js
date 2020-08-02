import React from 'react';
import styled from 'styled-components';

const PostTemplateBlock = styled.div`
  width: 80%;
  height: 80vh;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0,0,0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  
  display: flex;
  flex-direction: column;
`;

function PostTemplate( {children} ) {
  return (
    <PostTemplateBlock> { children } </PostTemplateBlock>
  );
}

export default PostTemplate
