import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div>
       <section className="hero">
      <div className="hero-content">
        <h2>Find Your Dream Home or Vehicle</h2>
        <p>
          Discover the perfect property or car from our extensive listings
          across the country. Buy, sell, or rent with ease.
        </p>
        <Link href="#" className="btn btn-white">Explore Listings</Link>
      </div>
    </section>
    </div>
  )
}

export default HeroSection
