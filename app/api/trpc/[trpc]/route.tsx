import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../[trpc]/[trpc]";

const handler = (req: Request) =>
    fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({auth: req.headers.has("x-descope-session")})
    });
  
  export { handler as GET, handler as POST };