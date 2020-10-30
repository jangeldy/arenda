import styled from 'styled-components';

export const Wrapper = styled.footer`
  .desktop {
    font-weight: 500;
    margin-top: 30px;
    background-color: ${(props) => (props.isDark ? '#282828' : '#efefef')};
    border-top: 1px solid ${(props) => props.bgColor};
    min-height: 65px;
  }

  .social-icons {
    a {
      margin-right: 25px;
    }
    a:last-child {
      margin-right: 0;
    }
    svg {
      cursor: pointer;
      fill: ${(props) => (props.isDark ? '#cccccc' : '#333333')};
      width: 18px;

      :hover {
        fill: ${(props) => (props.isDark ? '#999999' : '#666666')};
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

  .store {
    img {
      opacity: 0.8;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  }

  .navigation {
    border-top: 1px solid ${(props) => props.bgColor};
    height: 65px;
    position: fixed;
    bottom: 0;
    width: 100%;

    svg {
      font-size: 26px;
    }
  }
`;
