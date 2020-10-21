import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${(props) => (props.isDark ? '#282828' : '#efefef')};
  border-top: 1px solid ${(props) => props.bgColor};
  margin-top: 30px;
  font-weight: 500;

  .social-icons {
    a {
      margin-right: 25px;
    }
    svg {
      cursor: pointer;
      fill: ${(props) => (props.isDark ? '#cccccc' : '#333333')};
      width: 18px;

      :hover {
        fill: ${(props) => (props.isDark ? '#999999' : '#666666')};
      }
      :last-child {
        margin-right: 0;
      }
    }
  }

  .footer-items {
    display: flex;
    align-items: center;
    .item {
      display: block;
      padding: 5px 0;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .app-store {
    img {
      opacity: 0.8;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 743px) {
    .footer-items {
      display: block;
      .item-point {
        display: none;
      }
    }
    .app-store {
      display: none;
    }
  }
`;
