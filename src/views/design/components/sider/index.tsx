import React from 'react';
import { Tabs } from 'antd';
import uiInfo from '../../../../components/ui';
import './index.scss';

const { TabPane } = Tabs;
const { baseTpl, mediaTpl, chartTpl } = uiInfo;

interface IProps {
}

const DesignSider: React.FC<IProps> = () => {

  const renderComponent = (template: any) => {
    return template.map((ele: any) => {
      return (<div className="comp-item" key={ele.type}>{ele.displayName}</div>)
    })
  };

  return (
    <div className="design-sider">
      <Tabs type="card" tabPosition="left">
        <TabPane tab="基础" key="1">
          <div className="card-title">基础类组件</div>
          <div className="comp-list">
            {renderComponent(baseTpl)}
          </div>
        </TabPane>
        <TabPane tab="媒体" key="2">
          <div className="card-title">媒体类组件</div>
          <div className="comp-list">
            {renderComponent(mediaTpl)}
          </div>
        </TabPane>
        <TabPane tab="图表" key="3">
          <div className="card-title">图表类组件</div>
          <div className="comp-list">
            {renderComponent(chartTpl)}
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default DesignSider
