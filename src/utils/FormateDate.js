export function formatDateTime(date, allDay) {
  if (allDay) {
    return date.toLocaleDateString();
  }
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
