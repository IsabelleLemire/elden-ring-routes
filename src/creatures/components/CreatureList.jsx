import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchCreatures = async () => {
  const response = await fetch('https://eldenring.fanapis.com/api/creatures');
  if (!response.ok) {
    throw new Error('Failed to fetch creatures');
  }
  const data = await response.json();
  return data.data;
};

function CreatureList() {
	const { data, isLoading, isError } = useQuery(['creatures'], fetchCreatures);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching creatures</div>;
  }

  return (
    <div>
      <h1>Creature List</h1>
      <ul>
        {data.map((creature) => (
          <li key={creature.name}>
            <Link to={`/creature/${creature.name}`}>{creature.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreatureList;
