import React from 'react'
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import "antd/dist/antd.css";
import './Application.css';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { TableFood } from './components-food/TableFood';

export const Application = () => (
  <ConfigProvider locale={ruRU}>
    <Layout className='site-layout'>
      <Header>Header</Header>
      <Content style={{ padding: '25px 50px' }}>
        <div className='site-layout-content'>
          <TableFood />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </ConfigProvider>
);