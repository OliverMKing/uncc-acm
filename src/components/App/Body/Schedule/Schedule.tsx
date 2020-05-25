import React from "react";
import { Helmet } from "react-helmet";

import { Typography, Link } from "@material-ui/core";

import PastEvents from "./PastEvents/PastEvents";

// Need to render iframes like this
const smallCalendar =
  '<iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dW5jYy5lZHVfdm9hdGdmcDVqbzhkaGVzNHFsbXF0bjMxYzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH" style="border:solid 1px #777" width="96%" height="500" frameborder="0" scrolling="no"></iframe>';

const Iframe = (props: any) => {
  return (
    <div
      style={{ textAlign: "left" }}
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
};

const Schedule = () => {
  return (
    <div>
      <Helmet>
        <title>UNCC ACM - Schedule</title>
      </Helmet>
      <Typography variant="h3" component="h3" align="left" gutterBottom>
        Schedule
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        All students are welcome to attend our activities. You do not have to
        have any experience programming or be a computer science major. Join our{" "}
        <Link
          href="https://discord.com/invite/JqrPUEn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Link>{" "}
        and{" "}
        <Link
          href="https://ninerengage.uncc.edu/organization/acm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niner Engage
        </Link>{" "}
        to be alerted about upcoming opportunities.
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Weekly Meetings
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        Weekly meetings are held every Monday and Thursday at 5:30 pm in
        Woodward Hall Room 9999. Monday meetings tend to focus on competitive
        programming and Thursday meeting topics are more general. We look
        forward to seeing you there.
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Upcoming Events
      </Typography>
      <Typography variant="h6" component="h6" align="left" gutterBottom>
        ICPC Regionals (Fall 2020, Duke Universiy Site)
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        The largest annual competitive algorithmic programming contest for
        college students. Four teams of three people will be selected to travel
        to Duke to compete.
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Calendar
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        Click the event on the calendar for more information.
      </Typography>
      <Iframe iframe={smallCalendar} />,
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Past Events
      </Typography>
      <PastEvents />
    </div>
  );
};

export default Schedule;
