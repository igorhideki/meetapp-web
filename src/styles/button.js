import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: #f94d6a;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 42px;
  padding: 0 21px;
  border-radius: 4px;
  transition: background 0.2s;
  border: 0;
  display: flex;
  align-items: center;

  &:hover {
    background: ${darken(0.03, '#f94d6a')};
  }

  > svg {
    margin-right: 6px;
  }
`;
