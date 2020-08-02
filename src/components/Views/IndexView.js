import React from 'react'
import {Link } from 'react-router-dom';

function IndexView() {
  return (
    <div>
      <h1> 인덱스 뷰입니다. </h1>
      <Link to="/post/create"> /post/create로 이동 </Link>
    </div>
  )
}

export default IndexView