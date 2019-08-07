import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

function Navbar () {
    return(
        <div style={{height: '300px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    );
}

export default Navbar;