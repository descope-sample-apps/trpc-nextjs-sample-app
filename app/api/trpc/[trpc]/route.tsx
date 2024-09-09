import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../[trpc]/[trpc]";

const handler = (req: Request) =>
    fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({auth: Promise.resolve(false)})
    });
  
  export { handler as GET, handler as POST };