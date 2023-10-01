import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';



// 展示播放视频列表,随机选取一帧画面做预览图
// 点击按钮跳转播放视频
export const VideoList: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: 'tsSimpleAst/fetchInit' });
  }, []);

  return (
    <>
      <div>
        <div>视频列表</div>
      </div>
    </>
  );
};
