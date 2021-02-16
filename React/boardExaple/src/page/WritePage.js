import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    //ListPage의  setPosts 담기
    let post = { id: 6, title: '인풋값' };
  };

  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요..." />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
