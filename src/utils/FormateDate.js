export function formatDate(date, allDay) {
  const options = allDay
    ? {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    : {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
  const formatter = new Intl.DateTimeFormat("de-DE", options);

  return allDay
    ? formatter.format(date)
    : formatter.format(date).replace(",", ",");
}
