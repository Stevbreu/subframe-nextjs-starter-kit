// src/utils/appointmentUtils.ts

export function calculateDuration(
  startDate,
  endDate,
  allDay,
  startTime,
  endTime
) {
  if (allDay) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Tag${diffDays !== 1 ? "e" : ""}`;
  } else {
    const start = new Date(
      startDate.setHours(...startTime.split(":").map(Number))
    );
    const end = new Date(endDate.setHours(...endTime.split(":").map(Number)));
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours} Stunde${hours !== 1 ? "n" : ""} ${minutes} Minute${
      minutes !== 1 ? "n" : ""
    }`;
  }
}
