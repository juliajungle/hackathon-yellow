import styled from "styled-components";

const StyledNav = styled.nav`
  font-size: 16px;
  border-right: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px;

  h1 {
    font-size: 24px;
    color: #51ddb4;
    padding: 0;
    margin: 0 0 20px;
  }

  ul {
    color: #1a1a1a;
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
  }

  li {
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <h1>Features</h1>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
      </ul>
    </StyledNav>
  );
};
