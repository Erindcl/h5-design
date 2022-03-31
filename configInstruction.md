## 初始化脚手架

```shell
npx create-react-app my-app-name --template typescript
```

## 添加 scss

```shell
yarn add node-sass sass-loader scss
```

## 添加 react-router

```shell
yarn add @types/react-router react-router react-router-dom @types/react-router-redux react-router-redux
```

## 添加 redux

```shell
  yarn add @types/redux-thunk react-redux redux redux-thunk
  yarn add redux-devtools-extension -D
```

## 添加 antd

```shell
  yarn add antd
```

## 添加 less (支持 antd 自定义主题)

1. 添加相关依赖

```shell
yarn add less less-loader
```

2. 暴露 webpack 配置

```shell
yarn eject
```

3. 修改配置 webpack.config.js, 添加以下代码：

```javascript
// 添加 less-loader 特别配置
loaders.push({
  loader: require.resolve('less-loader'),
  options: {
    lessOptions: {
      javascriptEnabled: true // 重点！！！
    }
  },
})

// 添加 less 支持配置
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'less-loader'
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: {
        mode: 'local',
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
    'less-loader'
  ),
},
```

4. 修改 react-app-env.d.ts 文件，添加代码：

```javascript
declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```
