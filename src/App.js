// 1. 引入React核心功能
import React from 'react';
// 2. 引入Ant Design的布局和菜单组件
import { Layout, Menu } from 'antd';
// 3. 引入需要的图标
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
// 4. 引入路由相关的组件
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// 从Layout中解构出Header, Content, Sider组件，方便使用
const { Header, Content, Sider } = Layout;

// 这是一个简单的“首页”组件
function HomePage() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>欢迎来到首页！</h1>
      <p>这是使用Ant Design快速搭建的页面。</p>
    </div>
  );
}

// 这是一个简单的“用户页”组件
function UsersPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>加密货币</h1>
      <p>货币列表将来可以放在这里。</p>
    </div>
  );
}

// 这是一个简单的“设置页”组件
function SettingsPage() {
  return (
    <div style={{ padding: '24pt' }}>
      <h1>新闻</h1>
      <p>这里是展示新闻的地方。</p>
    </div>
  );
}

// 这是一个自定义的导航菜单组件，它高亮当前选中的项
function AppMenu() {
  // useLocation hook可以获取当前页面的路径（比如 /users）
  const location = useLocation();

  // 菜单项配置
  const menuItems = [
    {
      key: '/', // 唯一标识，我们直接用路径
      icon: <HomeOutlined />, // 图标
      label: <Link to="/">首页</Link>, // 显示的文字，用Link包裹实现点击跳转
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: <Link to="/users">加密货币</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: <Link to="/settings">新闻</Link>,
    },
  ];

  return (
    <Menu
      theme="dark" // 暗色主题，更适合侧边栏
      mode="inline" // 内嵌模式
      selectedKeys={[location.pathname]} // 关键！根据当前路径自动选中对应的菜单项
      items={menuItems}
    />
  );
}

// 主组件
function App() {
  return (
    // Router组件包裹整个应用，使其具备路由功能
    <Router>
      <Layout style={{ minHeight: '100vh' }}> {/* 整个页面布局，高度至少为整个视口高度 */}
        
        {/* 顶部导航栏（可选） */}
        <Header>
          <h1 style={{ color: 'white' }}>我的加密货币系统</h1>
        </Header>

        <Layout>
          {/* 左侧边栏 */}
          <Sider width={200}>
            {/* 把我们自定义的菜单放在侧边栏里 */}
            <AppMenu />
          </Sider>

          {/* 右侧主要内容区域 */}
          <Layout>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {/* Routes 和 Route 定义了路径和组件的映射关系 */}
              <Routes>
                {/* 当路径是 '/' 时，渲染 HomePage 组件 */}
                <Route path="/" element={<HomePage />} />
                {/* 当路径是 '/users' 时，渲染 UsersPage 组件 */}
                <Route path="/users" element={<UsersPage />} />
                {/* 当路径是 '/settings' 时，渲染 SettingsPage 组件 */}
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

// 导出App组件，这是React应用的入口
export default App;