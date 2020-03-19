import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TodoList from './Todo/TodoList'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import Next from './next'

// const { SubMenu } = Menu;
const { Header } = Layout;
ReactDOM.render(
    <div className="container">
        <Router>
            <>
                <Header className="">
                    <Menu
                        theme="white"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1"><Link to="/">Users</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/TodoList">Todos</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Next" style={{ paddingLeft: "30rem" }}>Next Assignment</Link></Menu.Item>
                    </Menu>
                </Header>
            </><br /><br />
            <div>
                <Route path="/" exact component={App} />
                <Route path="/TodoList" component={TodoList} />
                <Route path="/Next" component={Next} />
            </div>
        </Router>
    </div>

    , document.getElementById('root'))
