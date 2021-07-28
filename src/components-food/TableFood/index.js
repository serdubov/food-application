import React, { useMemo, useState } from 'react';
import { Table, Input, Row, Col, Divider } from 'antd';
import styles from './TableFood.module.css';
import { initialData, initialColumnNames } from '../../utils/utils';
import { TransferOptions } from '../TransferOptions';

export const TableFood = () => {
  const [products, setProduct] = useState([]);
  const [productsTargetKeys, setProductsTargetKeys] = useState([]);
  const [columnsTargetKeys, setColumnsTargetKeys] = useState([]);

  const handleChange = (id) => (e) => {
    const summary = e.target.value;
    setProduct(products => products.map((product) => {
      if (id === product.id) {
        const keys = Object.keys(initialColumnNames);
        const defaultValues = initialData.filter(item => item.id === product.id)[0];
        const property = keys.reduce((state, key) => ({
          ...state,
          [key]: product[key] && summary > 0 ? parseFloat((defaultValues[key] * summary).toFixed(2)) : defaultValues[key] ? defaultValues[key] : 0
        }), {});

        return {
          ...product,
          ...property
        }
      }
      return product;
    }));
  };

  const defaultColumns = [{
    title: 'Продукт',
    dataIndex: 'name',
    key: 'name',
    width: 350,
    render: (name, record) => {
      return <div className={styles.tableCell}>{name} <Input size="small" style={{ width: 100 }} onChange={handleChange(record.id)} type="number" /></div>
    },
  }];

  const [columns, setColumns] = useState(defaultColumns);

  const optionsColumn = useMemo(() => {
    const keys = Object.keys(initialColumnNames);
    return keys.map(key => ({
      title: initialColumnNames[key].name,
      dataIndex: key,
      key: key,
      choosen: false,
      sorter: (a, b) => a[key] - b[key],
    }))
  }, []);

  const handleProductTransder = (targetKeys) => {
    let target = [...targetKeys];
    const prevProducts = products.filter(product => {
      if (target.includes(product.id)) {
        target = target.filter(id => id !== product.id);
        return true;
      }
      return false;
    });
    const nextProducts = initialData.filter(product => {
      if (target.includes(product.id)) {
        target = target.filter(id => id !== product.id);
        return true;
      }
      return false;
    });
    setProduct([...prevProducts, ...nextProducts])
    setProductsTargetKeys(targetKeys)
  };

  const handleColumnsTransder = (targetKeys) => {
    let target = [...targetKeys];
    const prevColumns = columns.filter(column => {
      if (target.includes(column.key)) {
        target = target.filter(key => key !== column.key);
        return true;
      }
      return false;
    });
    const nextColumns = optionsColumn.filter(column => {
      if (target.includes(column.key)) {
        target = target.filter(key => key !== column.key);
        return true;
      }
      return false;
    });
    
    setColumns([...defaultColumns, ...prevColumns, ...nextColumns])
    setColumnsTargetKeys(targetKeys)
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Row justify="center">
            <TransferOptions 
              data={initialData.map(item => ({...item, key: item.id, choosen: false}))}
              targetKeys={productsTargetKeys}
              handleChange={handleProductTransder}
              render={item => `${item.name}`}
            />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <TransferOptions 
              data={optionsColumn}
              targetKeys={columnsTargetKeys}
              handleChange={handleColumnsTransder}
              render={item => `${item.title}`}
            />
          </Row>
        </Col>
        <Col span={24}>
          <Divider orientation="left">Задайте опции, чтобы начать</Divider>
          <Table
            columns={columns}
            dataSource={products}
            rowKey={record => record.id}
          />
        </Col>
      </Row>
    </>
  )
}