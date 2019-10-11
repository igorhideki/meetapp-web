import styled from 'styled-components';

export const Container = styled.div`
  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      padding: 0 20px;
    }

    textarea {
      padding: 14px 20px;
      resize: none;
    }

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      display: block;
      margin-bottom: 10px;
      align-self: flex-start;
      color: #fb6f91;
      font-weight: bold;
      line-height: 1;
    }

    > button {
      margin-top: 20px;
      margin-left: auto;
    }
  }
`;
