import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  

function formatDuration(seconds) {
  const dur = dayjs.duration(seconds, 'seconds');
  const hours = Math.floor(dur.asHours());
  const minutes = Math.floor(dur.asMinutes()) % 60;
  const secs = dur.seconds();
  return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export { formatTime, formatDuration }