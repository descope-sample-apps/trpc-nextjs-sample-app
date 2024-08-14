import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { ssrPrepass } from '@trpc/next/ssrPrepass';
import superjson from "superjson";
import type { AppRouter } from '../api/[trpc]';

const getBaseUrl = () => {
    // if (typeof window !== "undefined") return ""; // browser should use relative url
    // if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
  };

export const trpc_api = createTRPCNext<AppRouter>({
    config() {
      return {
        links: [
          httpBatchLink({
            url: getBaseUrl() + '/api/trpc',
          }),
        ],
      };
    },
    ssr: true,
    ssrPrepass,
  });