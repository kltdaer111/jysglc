import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import  trpcRouters  from "@/server/trpc-router/router"

// 处理请求
const handler = (request: Request, context: any) => {
  //console.log('req:', request);
  
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: trpcRouters.myRouter,
    createContext: (opts) => ({}),
  });
};
// 导出为POST和GET方法
// 详情请参考Next官方文档 https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export const GET = handler;
export const POST = handler;
