import styled from "styled-components";
import { TABLET } from "../../styles/mediaQueries";

export const Wrapper = styled.div`

  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${TABLET} {
    width: 96%;
  }

`

export const Title = styled.h1`
  color: ${({theme}) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;

`