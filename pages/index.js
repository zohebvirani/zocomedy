import React from 'react'

import data from '~/data'
import AboutSection from '~/components/sections/about'
import HireSection from '~/components/sections/hire'
import Head from '~/components/head'
import Footer from '~/components/footer'
import Logo from '~/components/logo2'
import PhotoSection from '~/components/sections/photo'
import ShowsSection from '~/components/sections/shows'
import SubscribeSection from '~/components/sections/subscribe'
import Navbar from '~/components/nav/navbar'
import NavMenu from '~/components/nav/nav_menu'

const Home = () => (
  <div id="home" className="page">
    <Head title="Zoheb Virani - Comedian - San Francisco" />
    <Navbar />
    <PhotoSection>
      <div className="responsive-padding">
        <Logo>Zoheb Virani</Logo>
        <NavMenu className="hero-menu" />
      </div>
    </PhotoSection>
    <AboutSection className="dark" />
    <ShowsSection shows={data.shows} />
    <HireSection className="dark" />
    <SubscribeSection />
    <Footer />
    <style jsx global>{`
      body {
        font-family: Helevetica Neue, sans-serif;
      }
    `}</style>
    <style jsx>{`
      .page {
        width: 100%;
        text-align: center;
        text-align: center;
      }
      .responsive-padding {
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      @media screen and (max-width: 1340px) {
        .responsive-padding {
          padding-top: 500px;
        }
      )
    `}</style>
  </div>
)

export default Home
