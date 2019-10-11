import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;

  label {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    transition: opacity 0.2s;
    border-radius: 4px;

    div {
      text-align: center;
      opacity: 0.3;
    }

    &:hover {
      opacity: 0.7;
    }

    & + span {
      margin-top: 10px;
    }
  }

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;
