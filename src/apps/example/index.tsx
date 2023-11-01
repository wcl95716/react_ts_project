import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTestData } from "./index.model";

const ExampleGrpc: React.FC = () => {
    const selectdata = useSelector(selectTestData);
    const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch();
    // });

    return (
        <div>
            <p>
                接收到的数 :
                {selectdata}
            </p>
        </div>
    );
};

export default ExampleGrpc;
