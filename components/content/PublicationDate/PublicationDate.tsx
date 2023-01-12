import React from "react";
import dayjs from "dayjs";

type Props = {
  /** Date YYYY-MM-DD */
  date: string;
};

export const PublicationDate: React.FC<Props> = ({ date }) => {
  const dateObj = dayjs(date);
  const humanDate = dateObj.format("MMMM D, YYYY");
  return (
    <time dateTime={date} className="font-bold font-sans text-m-sm">
      {humanDate}
    </time>
  );
};
