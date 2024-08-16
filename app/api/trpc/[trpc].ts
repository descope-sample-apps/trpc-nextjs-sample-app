/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '../../server/trpc';
import { z } from 'zod';

export const appRouter = router({
  hello: publicProcedure
    //.input(
    //  z.object({
    //    enabled: z.boolean().nullish(),
    //  }),
    //)
    .query(() => {
      // This is what you're returning to your client
      `hello world`
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
});