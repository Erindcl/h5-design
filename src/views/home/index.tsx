import React, { useState, useEffect } from 'react';
import Header from '../../layout/header';
import { useNavigate } from "react-router-dom";
import { AlertOutlined } from '@ant-design/icons';
import { Button, Pagination, Empty } from 'antd';
import './index.scss';

interface IPageInfo {
  total: number;
  pageIndex: number;
  pageSize: number;
}

const Page: React.FC = () => {
  const navigate = useNavigate();
  const [pageInfo, setPageInfo] = useState<IPageInfo>({
    total: 0,
    pageIndex: 1,
    pageSize: 10
  });
  const [h5List, setH5List] = useState([
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ]);

  const handleToDesignPage = (record?: any) => {
    navigate('/design', { state: record || null })
  }

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPageInfo({
      ...pageInfo,
      pageIndex: page,
      pageSize
    })
  }

  return (
    <div className="page-container home-page">
      <Header />
      <div className="page-body">
        <div className="home-page-side">
          <div className="add-btn-wrapper">
            <Button type="primary" className="add-btn" onClick={handleToDesignPage}>新建页面</Button>
          </div>
          <ul className="menu-wrapper">
            <li className="menu-item active">
              <AlertOutlined />
              <span className="menu-text">我的作品</span>
            </li>
          </ul>
        </div>
        <div className="home-page-main">
          <div className="page-title">我的作品</div>
          {h5List.length > 0 && <div className="h5-list">
            {h5List.map((ele, index) => (<div key={index} className="h5-item">
              <div className="h5-cover">
              </div>
              <div className="h5-info">
                <div className="h5-name">叮咚营销页面</div>
                <div className="h5-date">2022-04-12 12:22:33</div>
              </div>
            </div>))}
          </div>}
          {h5List.length === 0 && <Empty description="暂无作品，赶快去添加吧！" image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          {h5List.length !== 0 && <div className="pagination-wrapper">
            <Pagination
              showSizeChanger
              onChange={handlePaginationChange}
              current={pageInfo.pageIndex}
              total={pageInfo.total}
            />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Page
