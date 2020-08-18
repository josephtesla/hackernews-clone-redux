import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({theme}) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;

`

export const SwitchButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.border}
  color: ${({theme}) => theme.text}
`