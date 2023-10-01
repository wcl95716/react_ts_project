import React, { useEffect, useState } from 'react';
import { MyServiceClient } from '../../grpc/ExampleServiceClientPb';
import { DataRequest } from '../../grpc/example_pb';

const client = new MyServiceClient('http://localhost:10000');

const ExampleGrpc: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const request = new DataRequest();

    // 设置请求头
    const headers = {
      'Content-Type': 'application/grpc-web-text',
    };

    client.getData(request, headers, (err, response) => {
      console.log('response:', response);
      if (err) {
        console.error('Error:', err.message);
        // 在界面上显示错误信息
        setData('发生错误，请检查控制台日志。');
        return;
      }
      setData(response.getMessage());
    });
  }, []);

  return (
    <div>
      <p>接收到的数据：{data}</p>
    </div>
  );
};

export default ExampleGrpc;
