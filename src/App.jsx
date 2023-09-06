import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import Creatures from './creatures/components/Creatures';
import Creature from './creatures/components/Creature';

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}> 
        <Routes>
          <Route path="/" element={<Creatures />} />
          <Route path='/creature/:name' element={<Creature />} />
        </Routes>
      </QueryClientProvider>
  )

};

export default App;
