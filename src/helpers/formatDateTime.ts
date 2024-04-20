// Format the date to 'MMM DD, YYYY'
const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

// Format the time to 'hh:mm A'
const formatTime = (date: Date) =>
  date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

// Concatenate the formatted date and time
const formatDateTime = (date: Date) =>
  `${formatDate(date)} at ${formatTime(date)}`;

export default formatDateTime;
