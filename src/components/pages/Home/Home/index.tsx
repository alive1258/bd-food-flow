import AskQuestion from '../AskQuestion/AskQuestion'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import OurProducts from '../OurProducts/OurProducts'
import TopDonor from '../TopDonor/TopDonor'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Feature from './../Feature/Feature'
import Supply from './../Supply/Supply'

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <OurProducts />
      <TopDonor />
      <WhatWeDo />
      <Gallery />
      <Supply />
      <AskQuestion />
    </>
  )
}

export default Home
