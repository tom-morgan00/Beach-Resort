import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

export default function RoomsFilter({ rooms }) {
  const getUnique = (rooms, type) => {
    return [...new Set(rooms.map((room) => room[type]))];
  };
  // prettier-ignore
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(RoomContext);
  let roomTypes = getUnique(rooms, 'type');
  roomTypes = ['all', ...roomTypes].map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  let roomCapacities = getUnique(rooms, 'capacity').map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {roomTypes}
          </select>
        </div>
        {/* end of select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {roomCapacities}
          </select>
        </div>
        {/* end of select capacity */}
      </form>
    </section>
  );
}
