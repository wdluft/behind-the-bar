import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: none;
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

export const HeaderWrapper = styled.header`
  height: 100vh;
  /* BG image by Chris F from Pexels https://www.pexels.com/photo/assorted-wine-bottles-1283219/ */
  background-image: linear-gradient(
      rgba(39, 28, 25, 0.55),
      rgba(39, 28, 25, 0.55)
    ),
    url('/home-hero.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1 {
    text-shadow: var(--elevation3);
  }
`;

export const DrinkCardWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  /* background: var(--brown); */
  border-radius: 3px;
  padding: 1rem;
  box-shadow: var(--elevation3);

  img {
    max-width: 100%;
    max-height: 175px;
    min-width: 150px;
  }

  .drinkCard__tag {
    background: var(--secondary);
    border-radius: 10px;
    padding: 0.25rem 0.75rem;
    font-size: var(--smallText);
  }
`;

export const DrinksGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
