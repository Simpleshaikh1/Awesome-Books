import { DateTime } from 'luxon';

const time = document.getElementsByClassName('time');
const date = DateTime.local();
const formatDate = date.toFormat("MMMM dd'th 'yyyy', 'hh:mm:ss a");
time.innerHTML = ` ${formatDate}`;