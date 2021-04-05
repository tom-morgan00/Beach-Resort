import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="nice rooms, good prices">
          <Link to="/rooms" className="btn-primary">
            view rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
