import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
    return ( 
        <Layout pageHeading="Contact Us" pageTitle="Contact">
            <form>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message"/>
            </form>
        </Layout>
    )
}

export default Contact
