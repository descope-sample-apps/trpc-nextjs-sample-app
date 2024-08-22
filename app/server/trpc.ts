import { useUser } from '@descope/nextjs-sdk/client';
/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @link https://trpc.io/docs/v11/router
 * @link https://trpc.io/docs/v11/procedures
 */
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../server/context';


const t = initTRPC.context<Context>().create({})
export const router = t.router;

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(({ next, ctx }) => {
    console.log(ctx.auth);
    if (!ctx.auth) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return next({
      ctx: {
        auth: ctx.auth,
      },
    })
  })

export const protectedProcedure = t.procedure.use(isAuthed)