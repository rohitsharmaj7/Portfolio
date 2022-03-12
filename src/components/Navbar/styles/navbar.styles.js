import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 10vh;
  background: #000;

  .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
    list-style-type: none;
  }

  .nav__link {
    text-decoration: none;
    color: white;
  }

  .nav__toggler {
    display: none;
  }

  .logo {
    color: white;
  }

  @media screen and (max-width: 768px) {
    .nav__toggler {
      display: block;
    }

    .nav-menu {
      position: fixed;
      top: 10vh;
      right: 0;
      width: 100%;
      height: 93vh;
      background: rgba(0, 0, 0, 0.1);
      flex-direction: column;
      transform: translateX(100%);
      transition: 0.5s ease-in;
    }

    .nav-active {
      transform: translateX(0%);
    }
  }
`;

export default Navigation;
