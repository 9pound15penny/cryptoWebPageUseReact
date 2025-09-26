import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, LineChartOutlined, ReadOutlined} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
// 这是一个自定义的导航菜单组件，它高亮当前选中的项
function Navbar() {
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
      icon:<LineChartOutlined />,
      label: <Link to="/users">加密货币</Link>,
    },
    {
      key: '/settings',
      icon:<ReadOutlined />,
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
export default Navbar;