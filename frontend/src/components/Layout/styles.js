import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  margin: 30px 0;

  border-right: 1px solid ${darken(0.15, '#ccc')};
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

  form {
    margin: 30px 0;
    width: 500px;
    text-align: center;

    display: flex;
    flex-direction: column;

    h1 {
      color: #333;
      margin-bottom: 24px;
    }

    button {
      margin-top: 10px;
      height: 46px;
      border: 0;
      background: #063178;
      border-radius: 8px;
      transition: background 0.2s;
      color: #fff;
      font-size: 18px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.1, '#063178')};
      }
    }
  }
`;
