import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import defaultOptions from './configs/reactQuery';

function App() {
  const queryClient = new QueryClient({defaultOptions});

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          duration: 9000,
        }}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
