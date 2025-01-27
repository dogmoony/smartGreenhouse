import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Card, Col, Row, Input, Form, Button, Switch } from 'antd';
import { LineChartOutlined, SettingOutlined, DashboardOutlined, FireOutlined, CloudOutlined, BgColorsOutlined, BulbOutlined, ThunderboltOutlined, CloudSyncOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';

const { Header, Content, Footer, Sider } = Layout;

const DashboardPage = () => {
  const [heaterOn, setHeaterOn] = useState(true);
  const [lightOn, setLightOn] = useState(false);
  const [wateringOn, setWateringOn] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="site-layout-content"
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title={<div><FireOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />Температура</div>}
            bordered={false}
            style={{ backgroundColor: '#fff1f0' }}
          >
            <span style={{ fontSize: '24px', color: '#ff4d4f' }}>25°C</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div><CloudOutlined style={{ color: '#40a9ff', marginRight: 8 }} />Вологість</div>}
            bordered={false}
            style={{ backgroundColor: '#e6f7ff' }}
          >
            <span style={{ fontSize: '24px', color: '#40a9ff' }}>60%</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div><BgColorsOutlined style={{ color: '#36cfc9', marginRight: 8 }} />Рівень CO2</div>}
            bordered={false}
            style={{ backgroundColor: '#e6fffb' }}
          >
            <span style={{ fontSize: '24px', color: '#36cfc9' }}>400 ppm</span>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card
            title={<div><ThunderboltOutlined style={{ color: '#ffec3d', marginRight: 8 }} />Обігрівач</div>}
            bordered={false}
            style={{ backgroundColor: '#fffbe6' }}
          >
            <Switch checked={heaterOn} onChange={() => setHeaterOn(!heaterOn)} />
            <span style={{ marginLeft: 8 }}>{heaterOn ? 'Увімкнено' : 'Вимкнено'}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div><BulbOutlined style={{ color: '#ffa940', marginRight: 8 }} />Освітлення</div>}
            bordered={false}
            style={{ backgroundColor: '#fff7e6' }}
          >
            <Switch checked={lightOn} onChange={() => setLightOn(!lightOn)} />
            <span style={{ marginLeft: 8 }}>{lightOn ? 'Увімкнено' : 'Вимкнено'}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<div><CloudSyncOutlined style={{ color: '#69c0ff', marginRight: 8 }} />Полив</div>}
            bordered={false}
            style={{ backgroundColor: '#e6f7ff' }}
          >
            <Switch checked={wateringOn} onChange={() => setWateringOn(!wateringOn)} />
            <span style={{ marginLeft: 8 }}>{wateringOn ? 'Увімкнено' : 'Вимкнено'}</span>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

const MonitoringPage = () => {
  const temperatureData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Температура (°C)',
        data: [22, 23, 25, 26, 24, 23],
        fill: false,
        backgroundColor: '#ff4d4f',
        borderColor: '#ff4d4f',
      },
    ],
  };

  const humidityData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Вологість (%)',
        data: [55, 60, 65, 70, 68, 66],
        fill: false,
        backgroundColor: '#40a9ff',
        borderColor: '#40a9ff',
      },
    ],
  };

  const co2Data = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        label: 'Рівень CO2 (ppm)',
        data: [390, 400, 410, 420, 415, 405],
        fill: false,
        backgroundColor: '#36cfc9',
        borderColor: '#36cfc9',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="site-layout-content"
    >
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Графік Температури" bordered={false}>
            <div style={{ height: '300px' }}>
              <Line data={temperatureData} options={chartOptions} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Графік Вологості" bordered={false}>
            <div style={{ height: '300px' }}>
              <Line data={humidityData} options={chartOptions} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Графік Рівня CO2" bordered={false}>
            <div style={{ height: '300px' }}>
              <Line data={co2Data} options={chartOptions} />
            </div>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

const SettingsPage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="site-layout-content"
  >
    <Row justify="center">
      <Col span={24}>
        <Card title="Налаштування" bordered={false}>
          <Form layout="inline">
            <Form.Item label="Мінімальна температура (°C)">
              <Input placeholder="Введіть мін." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item label="Максимальна температура (°C)">
              <Input placeholder="Введіть макс." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Зберегти</Button>
            </Form.Item>
          </Form>
          <br></br>
          <Form layout="inline">
            <Form.Item label="Мінімальна вологість (%)">
              <Input placeholder="Введіть мін." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item label="Максимальна вологість (%)">
              <Input placeholder="Введіть макс." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Зберегти</Button>
            </Form.Item>
          </Form>
          <br></br>
          <Form layout="inline">
            <Form.Item label="Мінімальний рівень CO2 (ppm)">
              <Input placeholder="Введіть мін." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item label="Максимальний рівень CO2 (ppm)">
              <Input placeholder="Введіть макс." style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Зберегти</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  </motion.div >
);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };


  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'monitoring':
        return <MonitoringPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" style={{ height: 32, margin: 16, color: 'white', fontSize: '20px', textAlign: 'center' }}>
          🌱 Greenhouse
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={({ key }) => setCurrentPage(key)}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="monitoring" icon={<LineChartOutlined />}>Моніторинг</Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>Налаштування</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
          Smart Greenhouse Dashboard
        </Header>
        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Головна</Breadcrumb.Item>
            <Breadcrumb.Item>{
              currentPage === 'dashboard' ? 'Dashboard' :
                currentPage === 'monitoring' ? 'Моніторинг' : 'Налаштування'}
            </Breadcrumb.Item>
          </Breadcrumb>
          {renderContent()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Smart Greenhouse ©2025 Created by Kateryna Kushnir
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
