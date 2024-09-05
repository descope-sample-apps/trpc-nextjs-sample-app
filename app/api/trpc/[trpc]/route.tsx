import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { session } from '@descope/nextjs-sdk/server';
import { appRouter } from "../[trpc]/[trpc]";

const handler = (req: Request) =>
    fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({auth: Promise.resolve(req.headers.has("x-descope-session") && Boolean(session()?.token.isAuthenticated))})
    });
  
  export { handler as GET, handler as POST };