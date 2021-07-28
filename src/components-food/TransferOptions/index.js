import { Transfer } from 'antd';
import React from 'react';

export const TransferOptions = ({
  data, targetKeys, handleChange, render
}) => {
  return (
    <Transfer
      dataSource={data}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={render}
    /> 
  )
}