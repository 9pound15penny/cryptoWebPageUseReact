import React from 'react';
import { Layout, Typography } from 'antd';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, HomePage, Cryptocurrencies, News } from './components';
import "./App.css";

// 从Layout中解构出Header, Content, Sider组件，方便使用
const { Header, Content, Sider } = Layout;
const { Title } = Typography; 

// 主组件
function App() {
  return (
    // Router组件包裹整个应用，使其具备路由功能
    <Router>
      <Layout style={{ minHeight: '100vh' }}> {/* 整个页面布局，高度至少为整个视口高度 */}
        {/* 顶 */}
        <Header className="AppHeader">
          <Title level={3} className="title">
            加密货币分析平台
          </Title>
        </Header>
        <Layout>
          {/* 左侧边栏 */}
          <Sider width={200}>
            <Navbar />
          </Sider>
          {/* 右侧主要内容区域 */}
          <Layout>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {/* Routes 和 Route 定义了路径和组件的映射关系 */}
              <Routes>
                {/* 路由 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<Cryptocurrencies />} />
                <Route path="/settings" element={<News />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
        <Layout.Footer className='footer'>
          我的React学习项目 ©2025
        </Layout.Footer>
      </Layout>
    </Router>
  );
}

export default App;