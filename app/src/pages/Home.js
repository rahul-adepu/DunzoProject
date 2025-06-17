import React from 'react'
import Content from '../components/content/Content'
import Toppicks from '../components/Toppicks/Toppicks'
import MiddleImages from '../components/middle1Images/MiddleImages'
import MiddleImages2 from '../components/middle2Images/MiddleImages2'
import Branches from '../components/branches/Branches'
import { Link } from 'react-router-dom'
import Extraline from '../components/content/Extraline'
import Footer from '../components/footer/Footer'

function Home() {
    return (
        <div>
            <Link to='/' />
            <Extraline />
            <Content />
            <MiddleImages />
            <MiddleImages2 />
            <Toppicks />
            {/* <Phone /> */}
            <Branches />
            <Footer />
        </div>
    )
}

export default Home
