/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, protectedProcedure, router } from '../../../server/trpc';
import { createContext } from "../../../server/context"

export const appRouter = router({
  // only accessible to authorized users
  hello: protectedProcedure.query(() => {
    return {
      secret: `Congratulations! You are successfully accessing a protected procedure using Descope Authentication!`,
    }
  }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
})