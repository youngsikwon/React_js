import React from 'react';

const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards } = props;

  return (
    <div>
      <h1>홈 : (number).</h1>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((boards) => (
        <h3>
          제목 : {boards.title} 내용 ㅣ {boards.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
