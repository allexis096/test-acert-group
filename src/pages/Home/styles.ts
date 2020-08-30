import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Dogs = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  width: 100%;
`;

export const DogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  img {
    width: 220px;
    height: 180px;
  }
`;
