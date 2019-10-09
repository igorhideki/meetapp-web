import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 56px;

    h1 {
      font-size: 32px;
      color: #fff;
    }

    div {
      display: flex;

      button + button {
        margin-left: 15px;
      }
    }
  }

  section {
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;

    img {
      margin-bottom: 30px;
    }
  }

  footer {
    display: flex;
    font-size: 16px;
    color: #fff;
    opacity: 0.6;

    div {
      display: flex;
      align-items: center;

      time {
        margin-left: 7px;
      }

      address {
        margin-left: 7px;
        font-style: normal;
      }
    }

    div + div {
      margin-left: 30px;
    }
  }
`;
