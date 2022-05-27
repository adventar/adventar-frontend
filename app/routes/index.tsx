import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

type Calendar = {
  id: string;
  title: string;
};

export const loader: LoaderFunction = async () => {
  const url = "https://api.adventar.org/adventar.v1.Adventar/ListCalendars";
  const res = await fetch(url, { method: "POST", body: JSON.stringify({ year: 2021, page_size: 30 }) });
  const resultJson = (await res.json()) as any;
  return json(resultJson.calendars);
};

export default function TopPage() {
  const calendars = useLoaderData<Calendar[]>();

  return (
    <div>
      <h1>Adventar</h1>
      <ul>
        {calendars.map((calendar) => (
          <li key={calendar.id}>
            <Link to={`/calendars/${calendar.id}`}>{calendar.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
