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
        {/* select price */}
        <div className="form-group">
          <label htmlFor="price">price £{price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* end of price */}
        {/* select size */}
        <div className="form-group">
          <label htmlFor="size">size</label>
          <div>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
