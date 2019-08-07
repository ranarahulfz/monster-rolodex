import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import styled from 'styled-components'

const Link = styled.a`
    font-family: Roboto;
    font-weight: 600;
` 

function Navbar () {
    return(
        <div style={{height: '300px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                    <Navigation>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                        <Link href="#">Link</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    );
}

export default Navbar;