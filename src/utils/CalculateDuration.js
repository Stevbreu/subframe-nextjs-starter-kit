export function calculateDuration(start, end, allDay) {
  const diff = end.getTime() - start.getTime();
  if (allDay) {
    const days = Math.round(diff / (1000 * 60 * 60 * 24));
    return `${days} Tag${days !== 1 ? "e" : ""}`;
  } else {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.round((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }
}
