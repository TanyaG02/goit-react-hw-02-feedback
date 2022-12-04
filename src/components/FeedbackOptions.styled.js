import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #ebeef3;
  cursor: pointer;
  font-size: 20px;
  width: 100px;
  height: 40px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
  }
`;
