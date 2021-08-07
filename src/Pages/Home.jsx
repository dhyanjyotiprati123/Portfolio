import React from 'react'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import INtro from '../Components/INtro'
import Portfolio from '../Components/Portfolio'
import Testimonial from '../Components/Testimonial'
import Work from '../Components/Work'

const Home = () => {
    return (
        <div className="home">
            <INtro />
            <Portfolio />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
