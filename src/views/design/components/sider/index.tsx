import React, { useMemo } from 'react';
import { Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

interface IProps {
}

const DesignSider: React.FC<IProps> = () => {

  const renderTabPane = useMemo(() => {
    
  }, []);

  const renderComponet = useMemo(() => {

  }, []);

  return (
    <div className="design-sider">
      <Tabs type="card" tabPosition="left">
        <TabPane tab="基础" key="1">
          <p>基础类组件</p>
        </TabPane>
        <TabPane tab="媒体" key="2">
          <p>媒体类组件</p>
        </TabPane>
        <TabPane tab="商品" key="3">
          <p>商品类组件</p>
        </TabPane>
        <TabPane tab="图表" key="4">
          <p>图表类组件</p>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default DesignSider
