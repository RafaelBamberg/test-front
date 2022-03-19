import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border-radius: 3px;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  width: 20%;
  padding: 18px 12px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  transition-duration: 0.4s;
  :hover {
    background-color: #d45a00;
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
  }
`