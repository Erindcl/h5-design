import React, { useState, useEffect } from 'react';
import Header from '../../layout/header';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import DesignSider from './components/sider';
import EditorPanel from './components/panel';
import EditorSetting from './components/setting';
import './index.scss';

const operateBtns = [
  { text: '清空', key: 'clear', type: 'link' },
  { text: '生成海报', key: 'poster', type: 'link' },
  { text: '预览', key: 'preview', type: 'link' },
  { text: '页面设置', key: 'setting', type: 'link' },
  { text: '保存', key: 'save', type: 'primary' },
  { text: '退出', key: 'quit', type: 'default' },
];

const DesignPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOperateClick = (key: string) => {
    console.log(key);
  }

  return (
    <div className="design-page page-container">
      <Header>
        <div className="design-page-header">
          <div className="design-name">页面名称</div>
          <div className="operate-wrapper">
            {operateBtns.map((ele) => (<Button onClick={() => handleOperateClick(ele.key)} key={ele.key} type={(ele.type as any)}>{ele.text}</Button>))}
          </div>
        </div>
      </Header>
      <div className="page-body">
        <div className="design-left">
          <DesignSider />
        </div>
        <div className="design-right">
          <div className="editor-panel">
            <EditorPanel />
          </div>
          <div className="editor-setting">
            <EditorSetting />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignPage
