import MarkdownIt from "markdown-it";
import type { FC } from "react";
import { useMemo } from "react";
import type { Calendar } from "~/services/calendar/type";

type Props = {
  calendar: Calendar;
};

export const CalendarPage: FC<Props> = ({ calendar }) => {
  const description = useMemo(() => {
    return MarkdownIt({ linkify: true, breaks: true }).render(calendar.description || "");
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
};
