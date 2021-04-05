import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class Room extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
  };

  static contextType = RoomContext;

  render() {
    const { getRoom, loading } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no room found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero image={mainImg || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((img, i) => {
              return <img src={img} key={i} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price: £{price}</h6>
              <h6>Size: {size} SQ FT</h6>
              <h6>Beds: {capacity}</h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            </article>
          </div>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {extras.map((extra, i) => {
                return <li key={i}>{extra}</li>;
              })}
            </ul>
          </section>
        </section>
      </>
    );
  }
}
