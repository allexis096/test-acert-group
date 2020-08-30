import React, { useEffect, useState } from 'react';

import dogImg from '../../assets/pinscher.jpg';

import { Container, Dogs, DogCard } from './styles';

import api from '../../services/api';

// interface Request {
//   message: string[];
// }

const Dashboard: React.FC = () => {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const dogList = async (): Promise<void> => {
      const response = await api.get('list/all');

      // const test = [];

      const keys = Object.keys(response.data.message);

      // keys.forEach((key) => test.push(key));

      // console.log(keys);

      // test.push(response.data.message);

      // console.log(keys);

      setDogs(keys);
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
        {/* <DogCard>
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
        </DogCard> */}
      </Dogs>
    </Container>
  );
};

export default Dashboard;
