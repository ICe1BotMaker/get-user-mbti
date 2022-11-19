import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider, DehydratedState } from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState  }>) {
  const [ queryClient ] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
