import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter } from "@acme/api";
import { createContext } from "@acme/auth";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});

// If you need to enable cors, you can do so like this:
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Enable cors
//   await cors(req, res);

//   // Let the tRPC handler do its magic
//   return createNextApiHandler({
//     router: appRouter,
//     createContext,
//   })(req, res);
// };

// export default handler;
