import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Dogs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow-y: auto;
  width: 100%;

  form {
    fieldset {
      border: none;

      label {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
