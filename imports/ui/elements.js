import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__logo {
    display: flex;
    align-items: center;

    h4 {
      margin-right: 1rem;
    }
  }

  ul {
    display: flex;

    li {
      margin-right: 1rem;
    }
  }
`;
