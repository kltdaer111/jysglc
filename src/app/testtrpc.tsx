
"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { createTRPCNext } from "@trpc/next";
import { httpBatchLink } from "@trpc/client";
/**
 * 这里我们可以看到导入的只有类型，并没有appRouter的实例
 * 我们知道在TS编译为JS时这种类型是不会被编译的
 */
import TRPCRouter from "../server/trpc-router/router"

// 创建客户端tRPC实例
const trpc = createTRPCNext<TRPCRouter.typeMyRouter>({
  config(opts) {
    return {
      links: [
        // 我们使用http作为传输的载体
        httpBatchLink({
          url: `http://192.168.23.133:3000/api/trpc`,
        }),
      ],
    };
  },
});

const Button: FC<PropsWithChildren> =  ({ children }) => {
  // tRPC/Next中集成了 react-query 帮我们封装好了hooks 方便调用
  const  data  =  trpc.getServerData.useQuery('sdfdf');
  console.log(data.data);
  return (
    <div>
      <h1>data</h1>
    </div>
  );
};

// 通过tRPC提供的HOC对组件进行包裹
export default trpc.withTRPC(Button);