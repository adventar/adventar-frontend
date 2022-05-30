import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { CalendarPage } from "~/components/pages/calendars/CalendarPage/CalendarPage";
import { fetchCalendar } from "~/services/calendar/api";
import type { Calendar } from "~/services/calendar/type";

type LoaderData = Calendar;

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  invariant(id, "calendar id is required");
  const calendar = await fetchCalendar(id);
  return json<LoaderData>(calendar);
};

export default function CalendarPageContainer() {
  const calendar = useLoaderData<LoaderData>();
  return <CalendarPage calendar={calendar} />;
}
