// App.jsx
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Creature from './creatures/components/Creature';
import CreaturesList from './creatures/components/CreaturesList';
import { Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<CreaturesList />} />
        <Route path="/creature/:name" element={<Creature />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
