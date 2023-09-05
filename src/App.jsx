import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Creature from './creatures/components/Creature';

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}> 
        <Creature />
      </QueryClientProvider>
  )

};

export default App;
