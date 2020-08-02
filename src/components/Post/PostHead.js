import React from 'react';
import styled from 'styled-components';

const PostHeadStyleBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 19px;
    margin-top:40px;
    font-weight: bold;
  }
`;

function PostHead() {
  return (
    <PostHeadStyleBlock>
      <h1> 2020/7/24 </h1>
      <div className="day"> 금요일 </div>
      <div className="tasks-left"> n개의 Post </div>
    </PostHeadStyleBlock>
  );
}

export default PostHead
