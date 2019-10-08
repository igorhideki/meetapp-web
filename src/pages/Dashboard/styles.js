import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 32px;
      color: #fff;
    }
  }

  ul {
    margin-top: 56px;

    li + li {
      margin-top: 10px;
    }
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 0 32px;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};
  transition: background 0.2s;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    time {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      margin-right: 30px;
    }

    svg {
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
