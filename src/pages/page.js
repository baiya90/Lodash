import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Link,Route } from 'react-router-dom'
import RouterCtx from "../router/router";
import isSymbol from "./lang/isSymbol";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" style={{marginTop:'64px'}}>
                        <SubMenu key="array" title="Array">
                            <Menu.Item key="Chunk"><Link to={"/array/chunk"}>Chunk</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="collection" title="Collection">
                            <Menu.Item key="toNumber"><Link to={"/collection/toNumber"}>toNumber</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="lang" title="Lang">
                            <Menu.Item key="isObject"><Link to={"/lang/isObject"}>isObject</Link></Menu.Item>
                            <Menu.Item key="isSymbol"><Link to={"/lang/isSymbol"}>isSymbol</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px',background:'white' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Route path="/" component={RouterCtx}>  </Route>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Page;
