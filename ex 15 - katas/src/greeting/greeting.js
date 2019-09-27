export default function Greeting(name) {
  let message = 'Hello';
  const date = new Date();
  const time = date.getHours();

  switch (true) {
    case time >= 6 && time < 12:
      message = 'Good morning';
      break;
    case time >= 18 && time < 22:
      message = 'Good evening';
      break;
    case time >= 22 || time < 6:
      message = 'Good night';
      break;
    default:
      break;
  }

  let transformedName = name.trim();
  transformedName = `${transformedName.charAt(0).toUpperCase()}${transformedName.slice(1)}`;
  return `${message} ${transformedName}`;
}
