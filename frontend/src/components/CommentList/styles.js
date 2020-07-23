import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  margin: 30px 0;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  margin: 30px 0;

  h1 {
    color: #333;
    margin-bottom: 24px;
  }
`;

const animatedCicle = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const List = styled.ul`
  margin: 0 40px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;

    span {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const Button = styled.button`
  height: 36px;
  width: 56px;
  margin-left: 30px;

  svg {
    ${(props) =>
      props.loading !== '0' &&
      css`
        animation: ${animatedCicle} infinite 0.5s linear;
      `}
  }
`;
