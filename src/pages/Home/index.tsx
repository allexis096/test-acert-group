import React, { useEffect, useState } from 'react';

import dogImg from '../../assets/pinscher.jpg';

import { Container, Dogs, DogCard } from './styles';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const dogList = async (): Promise<void> => {
      const response = await api.get('breeds/list/all');

      const listDogs = Object.keys(response.data.message);

      const test = listDogs.map(async (dog) => {
        const responseList = await api.get(`breed/${dog}/images`);
        console.log(responseList.data.message[Math.floor(Math.random())]);
      });

      setDogs(listDogs);
    };

    dogList();
  }, []);

  return (
    <Container>
      <h1>Select a breed:</h1>

      <Dogs>
        {dogs.map((dog) => (
          <DogCard key={dog}>
            <img src={dogImg} alt="" />
            <span>{dog}</span>
          </DogCard>
        ))}
      </Dogs>
    </Container>
  );
};

export default Dashboard;
