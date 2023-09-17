import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CreatureService from '../service/CreatureService';

const creatureService = new CreatureService();

function CreatureDetail() {
  const { name } = useParams();
  const { data, isLoading, isError } = useQuery(['creature', name], () => fetchCreatureByName(name));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching creature</div>;
  }

  return (
    <div>
      <h1>Creature Detail</h1>
      <h2>{data.name}</h2>
    </div>
  );
}

export default CreatureDetail;
