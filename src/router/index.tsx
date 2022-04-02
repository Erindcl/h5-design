import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Result, Button } from 'antd';

const Home = React.lazy(() => import('../views/home'));
const Design = React.lazy(() => import('../views/design'));

const Loading: React.FC = () => {
  return (<div>...</div>)
}

const NotFound: React.FC = (props) => {
  const goHome = () => {
    window.location.href = '/home';
  }
  return ( <Result
    status="404"
    title="404"
    subTitle="你访问的页面不存在"
    extra={<Button onClick={goHome} type="primary">返回首页</Button>}
  />)
}

const router: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="design" element={<Design />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default router