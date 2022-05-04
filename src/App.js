import React, { useState } from 'react';
import './App.css';
import './static/css/common.css';

import Dashboard from './pages/Dashboard';
import Consumer from './pages/Consumer';
import DetailSearch from './pages/DetailSearch';
import ProductSearch from './pages/ProductSearch';
import Document from './pages/Document';
import DocumentDetail from './pages/DocumentDetail';
import DocumentUpload from './pages/DocumentUpload';

import { Layout, Menu } from 'antd';
import { DashboardOutlined, FileWordOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import MyHeader from './components/MyHeader';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Trace from './pages/Trace';
import Tree from './pages/Tree';
import { Counter } from './pages/Counter';

function App() {
  const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

  return (
    <Router>
      <div className="App">
        <MyHeader />
        <Layout>
          <Sider width={256} className="sider">
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<DashboardOutlined />} title="Trace">
                <Menu.Item key="1">
                  <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/product-search">Product entry</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<FileWordOutlined />} key="4">
                <Link to="/documents">Document</Link>
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />} key="5">Consumer</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content className='padding'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product-search" element={<ProductSearch />} />
                <Route path="/product-search/:id" element={<DetailSearch />} />
                <Route path="/trace" element={<Trace />} />
                <Route path="/tree" element={<Tree />} />
                <Route path="/documents" element={<Document />} />
                <Route path="/upload" element={<DocumentUpload />} />
                <Route path="/document/:id" element={<DocumentDetail />} />

                <Route path='/redux' element={<Counter />}></Route>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
