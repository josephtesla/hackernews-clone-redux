import styled from "styled-components";
import { TABLET } from "../../styles/mediaQueries";

export const Wrapper = styled.div`

  width: 96%;
  margin:auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${TABLET} {
    width: 96%;
  }

`

export const AppWrapper = styled.div`
  background: ${({theme}) => theme.background};
`

