import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatureList from './creatures/components/CreatureList';
import CreatureDetail from './creatures/components/CreatureDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CreatureList />} />
          <Route path="/creature/:name" element={<CreatureDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}


export default App;
