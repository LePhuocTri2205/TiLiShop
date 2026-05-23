import React, { useState } from 'react';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Breadcrumb, ConfigProvider, Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label: <Link to={key}>{label}</Link>,
  };
}

const items = [
  getItem('Quản lí bánh tráng', 'banhtrang', <PieChartOutlined />),
  getItem('Quản lí nước mắm', 'nuocmam', <PieChartOutlined />),
];

const BRAND = '#8B2D1F';
const BRAND_LIGHT = '#A63D2D';
const BG_CREAM = '#FDF5E6';
const BORDER_CREAM = '#E8D5B5';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Xác định menu key từ pathname
  const selectedKey = location.pathname.replace('/', '') || 'banhtrang';

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: BRAND_LIGHT,
          colorLink: BRAND_LIGHT,
          colorLinkHover: BRAND,
          borderRadius: 10,
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        },
        components: {
          Button: {
            colorPrimary: BRAND_LIGHT,
            algorithm: true,
          },
          Table: {
            colorBgContainer: 'rgba(253,245,230,0.6)',
            headerBg: '#f5e8d0',
            headerColor: '#5C2D1B',
            rowHoverBg: '#f9f0e0',
            borderColor: BORDER_CREAM,
          },
          Modal: {
            titleColor: BRAND,
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: BG_CREAM }}>
        {/* Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: `linear-gradient(180deg, ${BRAND} 0%, #6B1F12 100%)`,
            boxShadow: '2px 0 16px rgba(139,45,31,0.25)',
          }}
        >
          {/* Logo area */}
          <div
            style={{
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              marginBottom: 8,
            }}
          >
            {!collapsed ? (
              <span
                style={{
                  color: '#F5E6CA',
                  fontFamily: "serif",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                🍜 Hương Vị Quê
              </span>
            ) : (
              <span style={{ fontSize: 22 }}>🍜</span>
            )}
          </div>

          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            items={items}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#F5E6CA',
            }}
            theme="dark"
          />
        </Sider>

        <Layout style={{ background: BG_CREAM }}>
          {/* Header */}
          <Header
            style={{
              padding: '0 24px',
              background: 'rgba(253,245,230,0.9)',
              backdropFilter: 'blur(10px)',
              borderBottom: `1px solid ${BORDER_CREAM}`,
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 2px 12px rgba(139,45,31,0.08)',
            }}
          >
            <span
              style={{
                color: BRAND,
                fontWeight: 700,
                fontSize: 18,
                fontFamily: 'serif',
                letterSpacing: '0.05em',
              }}
            >
              Quản Lý Sản Phẩm
            </span>
          </Header>

          {/* Content */}
          <Content style={{ margin: '24px 24px 0' }}>
            <div
              style={{
                padding: 28,
                minHeight: 360,
                background: 'rgba(255,251,245,0.85)',
                borderRadius: 16,
                border: `1px solid ${BORDER_CREAM}`,
                boxShadow: '0 4px 24px rgba(139,45,31,0.07)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Outlet />
            </div>
          </Content>

          {/* Footer */}
          <Footer
            style={{
              textAlign: 'center',
              background: 'transparent',
              color: `${BRAND}99`,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 600,
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            Hương Vị Quê © {currentYear} — Sản phẩm Việt Nam
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Dashboard;