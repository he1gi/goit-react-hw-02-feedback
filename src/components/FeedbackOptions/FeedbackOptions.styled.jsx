import styled from '@emotion/styled';

export const Wrapper = styled.div`
  outline: tomato;
`;
export const Btn = styled.button`
  transition: transform 0.3ms;
  cursor: pointer;

  width: 160px;
  height: 50px;

  display: inline-block;
  color: #000;
  background-color: rgb(153, 228, 213);
  font-size: 25px;

  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
