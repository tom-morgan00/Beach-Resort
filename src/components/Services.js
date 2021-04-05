import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consecteur adispcilinding elit, Magni corporis!',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit amet consecteur adispcilinding elit, Magni corporis!',
      },
      {
        icon: <FaBeer />,
        title: 'great beer',
        info:
          'Lorem ipsum dolor sit amet consecteur adispcilinding elit, Magni corporis!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'shuttlevan offers',
        info:
          'Lorem ipsum dolor sit amet consecteur adispcilinding elit, Magni corporis!',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return (
              <article key={i} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
