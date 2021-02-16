import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 컴포넌트로 생성(재사용) : styld-components = > js파일과 css파일 관리
const StyledHeadButtonDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyledHeadLink = styled(Link)`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const Header = () => {
  return (
    <StyledHeadButtonDiv backgroundColor={'blue'}>
      <ul>
        <li>
          <StyledHeadLink to="/">홈</StyledHeadLink>
        </li>
        <li>
          <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
        </li>
      </ul>
    </StyledHeadButtonDiv>
  );
};

export default Header;
