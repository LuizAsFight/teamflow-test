import React from 'react';
import Router from './wrappers/router';
import Expanded from './wrappers/expanded';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Expanded>
        <Router />
      </Expanded>
    </QueryClientProvider>

  );
}

export default App;
