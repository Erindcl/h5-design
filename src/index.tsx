import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import './styles/theme.less';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
