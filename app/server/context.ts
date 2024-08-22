import * as trpcNext from '@trpc/server/adapters/next';

export async function createContext({ req,}: 
    trpcNext.CreateNextContextOptions) {
        async function getSessionFromHeader() {
        if (req.headers.has("x-descope-session")) {
            return true;
        }
        return false;
    }   
    const auth = getSessionFromHeader();
    return { auth, };
}

export type Context = Awaited<ReturnType<typeof createContext>>;