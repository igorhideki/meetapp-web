import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: #d44059;
      border: 0;
      color: #fff;
      font-weight: bold;
      padding: 0 20px;
      height: 42px;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#D44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 30px;

  strong {
    display: block;
    color: #fff;
  }

  a {
    display: block;
    margin-top: 4px;
    color: #999;
  }
`;
