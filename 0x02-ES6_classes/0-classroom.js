// 0-classroom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

// 0-main.js
import ClassRoom from './0-classroom.js';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize);

