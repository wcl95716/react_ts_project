import React, { useEffect, useState } from 'react';
import { MyServiceClient } from '../../grpc/ExampleServiceClientPb';
import { DataRequest } from '../../grpc/example_pb';
import { useDispatch, useSelector } from 'react-redux';
import { selectTestData } from './index.model';

const client = new MyServiceClient('http://localhost:10000');

const ExampleGrpc: React.FC = () => {

  const selectdata = useSelector(selectTestData);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch();
  // });

  return (
    <div>
      <p>接收到的数 : {selectdata}</p>
    </div>
  );
};


export default ExampleGrpc;
