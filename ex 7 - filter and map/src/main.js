const items = [
  { time: '5:17', name: 'Flexbox Video' },
  { time: '8:22', name: 'Redux Video' },
  { time: '3:34', name: 'Flexbox Video' },
  { time: '5:23', name: 'Flexbox Video' },
  { time: '7:24', name: 'Redux Video' },
  { time: '6:46', name: 'Flexbox Video' },
  { time: '4:45', name: 'Flexbox Video' },
  { time: '7:58', name: 'Flexbox Video' },
  { time: '11:51', name: 'Redux Video' },
  { time: '9:13', name: 'Flexbox Video' },
  { time: '5:50', name: 'Flexbox Video' },
  { time: '5:52', name: 'Redux Video' },
  { time: '5:49', name: 'Redux Video' },
  { time: '8:57', name: 'Flexbox Video' },
  { time: '11:29', name: 'Flexbox Video' },
  { time: '3:07', name: 'Redux Video' },
  { time: '3:31', name: 'Redux Video' },
];

// Filter for only the elements that contain the word 'Flexbox'
// map down to a list of time strings
// map to an array of seconds
// reduce to get total

const filteredItems = items.filter((item) => item.name.includes('Flexbox'));
const mappedTimes = filteredItems.map((item) => item.time);
const mappedSeconds = mappedTimes.map((a) => (Number(a.split(':')[0] * 60) + Number(a.split(':')[1])));
const total = mappedSeconds.reduce((acc, seconds) => acc + seconds, 0);

console.log(total);

// 🔥 This can also be done in a single .reduce(),
// but we're practicing arrow functions here
