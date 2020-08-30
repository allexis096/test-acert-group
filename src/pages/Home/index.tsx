import React, { useEffect, useState } from 'react';

import { Container, Dogs } from './styles';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const dogList = async (): Promise<void> => {
      const response = await api.get('breeds/list/all');

      const listDogs = Object.keys(response.data.message);

      setDogs(listDogs);
    };

    dogList();
  }, []);

  return (
    <Container>
      <Dogs>
        <form>
          <legend>
            <h1>Select a breed:</h1>
          </legend>

          <fieldset>
            <legend>
              <h2>Dogs</h2>
            </legend>

            <div>
              <label htmlFor="dogs">
                <select name="dogs" id="dogs">
                  <option value="0">Select the dog</option>
                  {dogs.map((dog) => (
                    <option key={dog} value={dog}>
                      {dog}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Fill the fields</h2>
            </legend>

            <label htmlFor="name">
              Nome do cachorro
              <input type="text" />
            </label>

            <label htmlFor="name">
              Cor
              <input type="text" />
            </label>

            <label htmlFor="name">
              Sexo
              <input type="text" />
            </label>

            <label htmlFor="name">
              Idade
              <input type="text" />
            </label>
          </fieldset>

          <button type="submit">test</button>
        </form>
      </Dogs>
    </Container>
  );
};

export default Dashboard;
