import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../views/home'));
const Layout = React.lazy(() => import('../layout/index'));

const Loading: React.FC = () => {
  return (<div>...</div>)
}

const NotFound: React.FC = () => {
  return (<div>404</div>)
}

const router: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <Layout />
            </React.Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="home"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default router