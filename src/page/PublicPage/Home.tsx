import React from 'react'
import CollectionShowcase from '../../Components/PublicPage/Home/CollectionShowcase'
import Subcategories from '../../Components/PublicPage/Home/Subcategories'
import Hero from '../../Components/PublicPage/Home/Hero'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CollectionShowcase />
      <Subcategories />
    </main>
  )
}

export default Home