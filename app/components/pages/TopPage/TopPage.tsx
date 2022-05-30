import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { Calendar } from "~/services/calendar/type";

type Props = {
  calendars: Array<Calendar>;
};

export const TopPage: FC<Props> = ({ calendars }) => {
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
};
