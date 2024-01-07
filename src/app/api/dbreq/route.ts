import GetDBdata from '@/util/mysql'
import { todo } from 'node:test';

const handler = async (req) => {
    console.log('dbreq:', req);
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
    const res = await GetDBdata();
    res[0].id = 23123321;
    let data = {};
    data.data = res;
    data.page = 1;
    data.success = true;
    data.total = 1;
    console.log(data);
    //TODO
    //没有progress_num 怀疑是表更新了以后prisma也要更新



    // let mydata = {
    //     "data": [
    //         {
    //             "project_num": "123",
    //             "progress_num": "345",
    //             "customer_name": "希捷",
    //             "work_place": "希捷",
    //             "customer_orderid": "123123",
    //             "factory_id": "3",
    //             "order_date": "2020-05-26",
    //             "order_content": "修空调",
    //             "customer_incharge": "KK",
    //             "company_incharge": "梁康田",
    //             "created_date": "2020-05-26",
    //             "quotation_number": "123123",
    //             "remarks": "无"
    //         }
    //     ],
    //     "page": 1,
    //     "success": true,
    //     "total": 1
    // };
    return new Response(JSON.stringify(data));

}

export const GET = handler;
export const POST = handler;