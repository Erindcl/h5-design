import React from 'react';
import { Empty, Form, InputNumber, Input, Select, Radio, Switch } from 'antd';
import './index.scss';

const { TextArea } = Input;
const { Option } = Select;

const Setting: React.FC<any> = ({ config }) => {

  return (
    <div className="editor-setting-comp">
      <div className="setting-title">属性设置</div>
      {!config && <div className="setting-empty">
        <Empty description={
          <div className="empty-description">
            <span>暂无设置项</span>
            <span>请先选择组件</span>
          </div>
        } image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>}
      {config && <Form
        className="setting-list"
      >
        {config.map((item: any, index: number) => {
          return (<React.Fragment key={index}>
            {item.type === 'Number' && (
              <Form.Item label={item.name} name={item.key}>
                <InputNumber max={item.range && item.range[1]} />
              </Form.Item>
            )}
            {item.type === 'Text' && (
              <Form.Item label={item.name} name={item.key}>
                <Input />
              </Form.Item>
            )}
            {item.type === 'TextArea' && (
              <Form.Item label={item.name} name={item.key}>
                <TextArea rows={4} />
              </Form.Item>
            )}
            {item.type === 'Select' && (
              <Form.Item label={item.name} name={item.key}>
                <Select placeholder="请选择">
                  {item.range.map((v: any, i: number) => {
                    return (
                      <Option value={v.key} key={i}>
                        {v.text}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            )}
            {item.type === 'Radio' && (
              <Form.Item label={item.name} name={item.key}>
                <Radio.Group>
                  {item.range.map((v: any, i: number) => {
                    return (
                      <Radio value={v.key} key={i}>
                        {v.text}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            )}
            {item.type === 'Switch' && (
              <Form.Item label={item.name} name={item.key} valuePropName="checked">
                <Switch />
              </Form.Item>
            )}
          </React.Fragment>)
        })}
      </Form>}
    </div>
  )
}

export default Setting
