// 5-main.js
import Building from './5-building.js';

// Attempting to create an instance of the abstract Building class should throw an error
try {
  const b = new Building(100);
  console.log(b);
} catch (err) {
  console.error('Error:', err.message);
}

// Creating an instance of the derived class that correctly implements evacuationWarningMessage
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'TestBuilding evacuation warning!';
  }
}

try {
  const tb = new TestBuilding(200);
  console.log(tb);
  console.log(tb.evacuationWarningMessage());
} catch (err) {
  console.error('Error:', err.message);
}

