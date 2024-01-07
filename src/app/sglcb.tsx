'use client'

import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { EditableProTable, ProFormRadio } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef, useState } from 'react';
import request from 'umi-request';
import moment from 'moment';
// import { createTRPCNext } from "@trpc/next";
// import { httpBatchLink } from "@trpc/client";

// import TRPCRouter from "../server/trpc-router/router"

let today = moment().format('YYYY-MM-DD');
let firstDayThisYear = moment().format('YYYY-01-01');

// 创建客户端tRPC实例
// const trpc = createTRPCNext<TRPCRouter.typeMyRouter>({
//   config(opts) {
//     return {
//       links: [
//         // 我们使用http作为传输的载体
//         httpBatchLink({
//           url: `http://192.168.23.133:3000/api/trpc`,
//         }),
//       ],
//     };
//   },
// });
// export const waitTimePromise = async (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

// export const waitTime = async (time: number = 100) => {
//   await waitTimePromise(time);
// };

type JYSGLCItem = {
  id: number;
  project_num: string;
  progress_num: string;
  customer_name: string;
  work_place: string;
  customer_orderid: string;
  factory_id: string;
  order_date: Date;
  order_content: string;
  customer_incharge: string;
  company_incharge: string;
  setup_date: Date;
  quotation_number: string;
  remarks: string;
};



const columns: ProColumns<JYSGLCItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '项目号',
    dataIndex: 'project_num',
    copyable: true,
    sorter: true,
    filters: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '必填项',
        },
      ],
    },
  },
  {
    title: '立项日期',
    dataIndex: 'setup_date_for_search',
    valueType: 'dateRange',
    hideInTable: true,
    initialValue: [firstDayThisYear, today],
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '出订单日',
    dataIndex: 'order_date_for_search',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '流程号',
    dataIndex: 'progress_num',
    valueType: 'text',
    sorter: true,
    filter: true,
    search: false,
  },
  {
    title: '客户名称',
    dataIndex: 'customer_name',
    valueType: 'text',
    sorter: true,
    search: false,
  },
  {
    title: '施工地点',
    dataIndex: 'work_place',
    valueType: 'text',
    sorter: true,
    search: false,
  },
  {
    title: '客户订单号',
    dataIndex: 'customer_orderid',
    valueType: 'text',
    sorter: true,
  },
  {
    title: '厂别',
    dataIndex: 'factory_id',
    valueType: 'text',
    search: false,
  },
  {
    title: '出订单日',
    dataIndex: 'order_date',
    valueType: 'date',
    sorter: true,
    search: false,
  },
  {
    title: '订单内容',
    dataIndex: 'order_content',
    valueType: 'text',
    search: false,
  },
  {
    title: '客户负责人',
    dataIndex: 'customer_incharge',
    valueType: 'text',
    sorter: true,
    search: false,
  },
  {
    title: '公司负责人',
    dataIndex: 'company_incharge',
    valueType: 'text',
    sorter: true,
  },
  
  {
    title: '立项日期',
    dataIndex: 'setup_date',
    valueType: 'date',
    search: false,
    sorter: true,
  },
  {
    title: '报价编号',
    dataIndex: 'quotation_number',
    valueType: 'text',
    sorter: true,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    valueType: 'text',
    search: false,
  },
  // {
  //   disable: true,
  //   title: '状态',
  //   dataIndex: 'state',
  //   filters: true,
  //   onFilter: true,
  //   ellipsis: true,
  //   valueType: 'select',
  //   valueEnum: {
  //     all: { text: '超长'.repeat(50) },
  //     open: {
  //       text: '未解决',
  //       status: 'Error',
  //     },
  //     closed: {
  //       text: '已解决',
  //       status: 'Success',
  //       disabled: true,
  //     },
  //     processing: {
  //       text: '解决中',
  //       status: 'Processing',
  //     },
  //   },
  // },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      // <a
      //   key="copy"
      //   onClick={() => {
      //     //action?.?.(record.id);
      //   }}
      // >
      //   复制
      // </a>,
    ],
  },
];

request.interceptors.request.use((url, options) => {
  console.log('url:' + url);
  console.log('opt:' + JSON.stringify(options));
  //options.mode = 'no-cors';
  return {
      url,
      options: options
  }
})

request.interceptors.response.use(async (res, options) => {
  console.log('res:', res.body);
  const data = await res.clone();
  console.log('response',data);
  console.log('options', options);
  return res;
});

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const App = () => {
  const actionRef = useRef<ActionType>();
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'top',
  );
  

  return (
    <EditableProTable<JYSGLCItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      recordCreatorProps={
        position !== 'hidden'
          ? {
              position: position ,
              record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              creatorButtonText: '立项',
            }
          : false
      }
      request={ async (params, sort, filter) => {
        
        //console.log(sort, filter);
        params.func = 'sglcb';
        await waitTime(2000);
        let mydata = {};
        // let afunc = new Promise(trpc.getServerData.useQuery('1123'));
        // let mydata = await afunc();
        
        // return{
        //   data: mydata.data,
        //   success: true,
        //   total: 1
        // };
          
        
        // const mydata = trpc.getServerData.useQuery('1123');
        // console.log("params:" + JSON.stringify(params));
        // console.log('data:', mydata);
        

        return request<{
          data: JYSGLCItem[];
        }>('http://192.168.23.133:3000/api/dbreq', {
           params, sort, filter
        });
      }}
      
      editable={{
        type: 'multiple',
        onSave: async (rowKey, data, row) => {
          console.log('onsave:', rowKey, data, row);
          //TODO 保存(发送数据至服务器)

        },
        onDelete: async(rowKey, row) =>{
          console.log('ondelete:', rowKey, row);
          //TODO 删除
        },
        
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange : (data)=>{
          console.log('col-data:', data);
        },
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      // form={{
      //   // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
      //   syncToUrl: (values, type) => {
      //     if (type === 'get') {
      //       return {
      //         ...values,
      //         created_at: [values.startTime, values.endTime],
      //       };
      //     }
      //     return values;
      //   },
      // }}
      pagination={{
        pageSize: 30,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="施工流程表"
      // toolBarRender={() => [
      //   <ProFormRadio.Group
      //     key="render"
      //     fieldProps={{
      //       value: position,
      //       onChange: (e) => setPosition(e.target.value),
      //     }}
      //     options={[
      //       {
      //         label: '添加到顶部',
      //         value: 'top',
      //       },
      //       {
      //         label: '添加到底部',
      //         value: 'bottom',
      //       },
      //       {
      //         label: '隐藏',
      //         value: 'hidden',
      //       },
      //     ]}
      //   />,
      // ]}
    />
  );
};

export default App;