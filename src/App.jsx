import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Creature from './creatures/components/Creature';
import CreatureList from './creatures/components/CreaturesList';
import { Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}> 
        <Routes>
          <Route path="/" element={<Creature />}/>
          <Route path="/crature/:name" element={<CreatureList />}/>
        </Routes>
      </QueryClientProvider>
  )

};

export default App;
