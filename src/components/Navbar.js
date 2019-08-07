import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import styled from 'styled-components'

const Link = styled.a`
    font-family: Roboto;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(0,0,0,0.87);
    font-family: "Roboto Mono",monospace;
` 

function Navbar () {
    return(
        <div style={{height: '300px', position: 'relative'}}>
            <Layout>
                <Header 
                    style={{
                        backgroundColor: '#fff',
                        borderBottom: '1px solid #E0E0E0'
                    }}
                    title = {
                        <span
                            style = {{
                                fontSize: '20px',
                                letterSpacing: '.4px',
                                paddingLeft: '24px',
                                textTransform: 'uppercase',
                                color: 'rgba(0,0,0,0.87)',
                                fontFamily: '"Roboto Mono",monospace' 
                            }}
                        >
                            <span>FAST </span>
                            <strong>BSR</strong>
                        </span>}>
                    <Navigation>
                        <Link style={{color: 'rgba(0,0,0,0.87)'}} href="#">Link</Link>
                        <Link style={{color: 'rgba(0,0,0,0.87)'}} href="#">Link</Link>
                        <Link style={{color: 'rgba(0,0,0,0.87)'}} href="#">Link</Link>
                        <Link style={{color: 'rgba(0,0,0,0.87)'}} href="#">Link</Link>
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