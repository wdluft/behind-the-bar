import styled from 'styled-components';

export const NavWrapper = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__logo {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    .nav__logoImg {
      margin-right: 0.5rem;
      width: 25px;
    }
  }

  ul {
    display: flex;

    li {
      margin-right: 1rem;
    }
  }
`;
