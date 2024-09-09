import * as trpcNext from '@trpc/server/adapters/next';
import { session } from '@descope/nextjs-sdk/server';

export async function createContext({ req }: 
    trpcNext.CreateNextContextOptions) {
        async function getSessionAuth() {
            const hasSessionHeader = req.headers["x-descope-session"];
            if (!hasSessionHeader) return false;
            const descopeSession = await session();
            return Boolean(descopeSession?.token.isAuthenticated);
    }   
    const auth = getSessionAuth();
    return { auth };
}

export type Context = Awaited<ReturnType<typeof createContext>>;