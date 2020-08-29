import React, { useEffect, useState } from 'react';

import dogImg from '../../assets/pinscher.jpg';

import { Container, Dogs, DogCard } from './styles';

// import api from '../../services/api';

const Dashboard: React.FC = () => {
  // const [dog, setDog] = useState([]);

  // useEffect(() => {
  //   const dogList = async (): Promise<void> => {
  //     const response = await api.get('list/all');

  //     setDog(response.data.message);
  //   };

  //   dogList();
  // }, []);

  return (
    <Container>
      <h1>Select a breed:</h1>

      <Dogs>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
        <DogCard>
          <img src={dogImg} alt="" />
          <span>Pinscher</span>
        </DogCard>
      </Dogs>
    </Container>
  );
};

export default Dashboard;
