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

export const DrinkCardWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background: var(--tertiary);
  border-radius: 3px;
  padding: 1rem;

  img {
    max-width: 100%;
    max-height: 250px;
    min-width: 225px;
  }

  .drinkCard__tag {
    background: var(--secondary);
    border-radius: 10px;
    padding: 0.25rem 1rem;
  }
`;

export const DrinksGridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;
