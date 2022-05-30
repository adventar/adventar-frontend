import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { TopPage } from "~/components/pages/TopPage/TopPage";
import { fetchCalendarList } from "~/services/calendar/api";
import type { Calendar } from "~/services/calendar/type";

type LoaderData = Calendar[];

export const loader: LoaderFunction = async () => {
  const calendars = await fetchCalendarList({ year: 2021, pageSize: 30 });
  return json<LoaderData>(calendars);
};

export default function TopPageContainer() {
  const calendars = useLoaderData<LoaderData>();
  return <TopPage calendars={calendars} />;
}
