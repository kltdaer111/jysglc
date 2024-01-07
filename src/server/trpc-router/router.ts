import { TRPCError, initTRPC } from "@trpc/server";
import os from "os";



// 初始化tRPC
const { procedure, router } = initTRPC.create();
// 创建路由
const myRouter = router({

  // getServerMemo: procedure
  // // 可以在这里对输入进行效验，返回值类型就是客户端调用的入参类型
  // .input((value: unknown): string => {
  //     console.log('value:', value);
  //   if (typeof value === "string" && value.includes("内存")) {
  //     // 返回类型为string
  //     return value;
  //   } else {
  //     throw new TRPCError({
  //       code: "BAD_REQUEST",
  //       message: "输入内容包含 [内存] 的字符串！",
  //     });
  //   }
  // })
  // .query(async (opt) => {
  //   // 这里的opt.input的类型被自动推断为string
  //   return `${opt.input}${os.totalmem()}`;
  // }),

  //TODO
  getServerData: procedure
  // 可以在这里对输入进行效验，返回值类型就是客户端调用的入参类型
  .query(async (data) => {
    // 这里的opt.input的类型被自动推断为string
    

    const mydata = {
      "data": [
          {
              id: "12334",
              project_num: "123",
              progress_num: "345",
              customer_name: "希捷",
              work_place: "希捷",
              customer_orderid: "123123",
              factory_id: "3",
              order_date: "2020-05-26",
              order_content: "修空调",
              customer_incharge: "KK",
              company_incharge: "梁康田",
              created_date: "2020-05-26",
              quotation_number: "123123",
              remarks: "无"
          }
      ],
      "page": 1,
      "success": true,
      "total": 1
    };
    console.log('opt:', mydata);
    return mydata;
  }),
});


export default {
  myRouter : myRouter,
  typeMyRouter : typeof myRouter,
}

// export {
//   demoRouter,
//   type typeDemoRouter,
// }
