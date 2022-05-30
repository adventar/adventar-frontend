import type { Calendar } from "./type";

export async function fetchCalendarList({
  year,
  pageSize,
}: {
  year: number;
  pageSize: number;
}): Promise<Array<Calendar>> {
  const url = "https://api.adventar.org/adventar.v1.Adventar/ListCalendars";
  const res = await fetch(url, { method: "POST", body: JSON.stringify({ year, page_size: pageSize }) });
  const json = (await res.json()) as any;
  return json.calendars;
}

export async function fetchCalendar(id: string): Promise<Calendar> {
  const url = "https://api.adventar.org/adventar.v1.Adventar/GetCalendar";
  const res = await fetch(url, { method: "POST", body: JSON.stringify({ calendar_id: id }) });
  const json = (await res.json()) as any;
  return json.calendar;
}
