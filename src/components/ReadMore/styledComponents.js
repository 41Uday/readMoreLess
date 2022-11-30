import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #334155;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const Img = styled.img`
  height: 30%;
  width: 40%;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
  }
`
export const Button = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 8px;
  border: none;
  background-color: #1f81ff;
  color: white;
  font-family: 'Roboto';
`
