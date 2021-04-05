import React from 'react';
import RoomFilters from './RoomFilters';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  // console.log(rooms, sortedRooms);

  if (loading) return <Loading />;
  return (
    <>
      <RoomFilters rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
// export default function RoomsContainer() {
//   const { loading, rooms, sortedRooms } = useContext(RoomContext);
//   console.log(sortedRooms);

//   if (loading) return <Loading />;
//   return (
//     <>
//       <RoomFilters rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//     </>
//   );
// }
