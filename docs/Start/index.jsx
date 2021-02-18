import React from "react"
import { Layout } from 'antd';
const { Content } = Layout;

export default class Contanier extends React.Component{
    render(){
        return <Layout>
                    <Layout style={{ margin: '24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
                            <h2>使用组件</h2>
                            <pre>
                                <code> > npm i cake-ui -g</code>
                            </pre>
                            <h2>使用说明</h2>
                            <p>我们的组件是对ant design的二次封装，如果需要更细小化的组件可以访问<a href="https://ant.design/index-cn">https://ant.design/index-cn</a></p>
                        </Content>
                    </Layout>
                </Layout>
    }
}


