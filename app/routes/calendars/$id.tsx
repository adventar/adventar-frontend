import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import MarkdownIt from "markdown-it";
import { useMemo } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const url = "https://api.adventar.org/adventar.v1.Adventar/GetCalendar";
  const res = await fetch(url, { method: "POST", body: JSON.stringify({ calendar_id: id }) });
  const resultJson = (await res.json()) as any;
  return json(resultJson.calendar);
};

type Calendar = {
  id: number;
  title: string;
  year: number;
  description: string;
};

export default function CalendarPage() {
  const calendar = useLoaderData<Calendar>();
  const description = useMemo(() => {
    return MarkdownIt({ linkify: true, breaks: true }).render(calendar.description);
  }, [calendar.description]);

  return (
    <div>
      <h1>Adventar</h1>
      <h2>
        {calendar.title} Advent Calendar {calendar.year}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
