import React from "react";
import { Helmet } from "react-helmet";

import { Typography, Link } from "@material-ui/core";

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
        All students are welcome to attend our meetings. You do not have to have
        any experience programming or be a computer science major. Join our{" "}
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
        to be alerted about upcoming meetings.
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        Weekly meetings are held every Monday and Thursday at 5:30 pm in
        Woodward Hall Room 9999. We look forward to seeing you there.
      </Typography>
    </div>
  );
};

export default Schedule;
