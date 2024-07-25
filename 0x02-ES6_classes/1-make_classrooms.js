// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

// 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

