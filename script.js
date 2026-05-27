const ROOM_DATA = {
  'AB301': '3',
  'AB219A': '2',
  'AB219B': '2',
  'AB218': '2',
  'AB213': '2',
  'AB106': '1',
  'ABCC15':'1',
  'AB010': '0',
  'AB007': '0',
  'AB008': '0',
  'AB009': '0',
  'ABCC11':'0',
  'ABCC12':'0',
  'AB206A':'2',
  'AB127A':'1',
  'AB127B':'1',
};
for(let i=102;i<=104;i++){
  ROOM_DATA[`AB${i}`]='1';
}
for (let i=1;i<=6;i++) {
  ROOM_DATA[`ABCC${i}`] = '2';
}
for (let i=201;i<=207;i++) {
  ROOM_DATA[`AB${i}`] = '2';
}
const DEPART={
  'AB' : 'ADMIN BLOCK',
}
const DIRECTION={
  'AB301' : 'From the main staircase, go straight and turn left.', 

  'AB218' : 'From the main staircase, the room is directly in front, slightly to the left.',
  'ABCC1' : 'From the main staircase, turn left; it’s the first room on your left.',
  'ABCC2' : 'From the main staircase, turn left; it’s the second room on your left, next to CC1.',
  'ABCC3' : 'From the main staircase, turn left; it’s the third room on your left, beside CC2.',
  'ABCC4' : 'From the main staircase, turn left; it’s the fourth room on your left, next to CC3.',
  'AB213' : 'From the main staircase, turn left; it’s the last room on your left corridor, before the elevator.',
  'ABCC5' : 'From the main staircase, go straight ahead, then turn right; it’s the last room on your right beside AB207.',
  'ABCC6' : 'From the main staircase, go straight ahead, then turn right; it’s the first room on your left, beside the Controller’s Office.',
  'AB207' : 'From the main staircase, go straight, then turn right; it’s between CC6 and CC5.',
  'AB206A': 'From the main staircase, turn right; it’s the first room on your right.',
  'AB206' : 'From the main staircase, turn right; it’s the second room on your right, next to AB206A.',
  'AB205' : 'From the main staircase, turn right; it’s the third room on your right, after AB206.',
  'AB204' : 'From the main staircase, turn right; it’s the fourth room on your right, at the end of the right corridor.',
  'AB203' : 'From the main staircase, turn right; it’s between AB202 and AB204, on your right side.',
  'AB202' : 'From the main staircase, turn right; it’s the second room on your right, next to AB201.',
  'AB201' : 'From the main staircase, turn right; it’s the first room on your right.',
  'AB219A': 'From the main staircase, go straight ahead; it’s the first room on your right in the upper middle corridor.',
  'AB219B': 'From the main staircase, go straight ahead; it’s the second room on your right,  next to AB219A.',
  
  'ABCC15': 'From the main staircase, the lab is directly in front of you.',
  'AB127A': 'Located within CC15, directly ahead of the main staircase.',
  'AB127B': 'Located within CC15, directly ahead of the main staircase.',
  'AB102' : 'From the main staircase, turn right, go straight ahead, and it’s the large hall in the top-right corner.',
  'AB103' : 'From the main staircase, turn right; it’s the first room on your right after the Administrative Office.',
  'AB104' : 'From the main staircase, turn right; it’s the second room on your right, next to AB103.',
  'AB106' : 'From the main staircase, turn right; it’s the third room on your right, next to AB104.',

  'ABCC11': 'From the main entrance, go left through the corridor; the first lab on your right side after the storage area.',
  'AB010' : 'From the main entrance, go left; it’s the second room on the right after CC11.',
  'ABCC12': 'From the main entrance, go left; it’s the third room on the right after CC11 and AB010.',
  'AB016' : 'From the main staircase, go right, and it’s the large hall directly in front on that side.',
  'AB009' : 'From the main staircase, turn right, and it’s the second room on your right after the Control System Lab.',
  'AB008' : 'From the main staircase, turn right; it’s the third room on your right, next to AB009.',
}
function searchRoom() {
  const roomInput = document.getElementById('room-search').value.trim().toUpperCase();
  const output = document.getElementById('search-output');
  const floorImage = document.getElementById('floor-plan');

  if (!roomInput) {
    output.textContent = 'Please enter a room number.';
    return;
  }

  const floor = ROOM_DATA[roomInput];
  const temp=roomInput.slice(0,2);
  const depart = DEPART[temp];
  const direction = DIRECTION[roomInput];
  
  if (floor) {
    
    floorImage.src = `${temp}floor${floor}.png`;
    let message = '';
    if (floor === '0') {
      message = `Room ${roomInput} is on ${depart} Ground Floor.`;
    } else {
      message = `Room ${roomInput} is on ${depart} Floor ${floor}.`;
    }

    if (direction) {
      message += `\nDirection: ${direction}`;
    }


    output.style.whiteSpace = 'pre-line';
    output.textContent = message;
    
  } else {
    output.textContent = `Room ${roomInput} not found.`;
  }
}
