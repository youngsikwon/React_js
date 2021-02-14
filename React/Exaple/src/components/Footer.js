import React from 'react';
import styled from 'styled-components';

// 컴포넌트로 생성(재사용) : styld-components = > js파일과 css파일 관리
const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;
const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>메뉴</li>
        <li>메뉴2</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
