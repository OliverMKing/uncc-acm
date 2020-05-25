import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";

import Team1_2019 from "../../../../../images/ICPC/2019Team1.jpg";
import Team2_2019 from "../../../../../images/ICPC/2019Team2.jpg";
import Team3_2019 from "../../../../../images/ICPC/2019Team3.jpg";
import Team4_2019 from "../../../../../images/ICPC/2019Team4.jpg";
import Team1_2018 from "../../../../../images/ICPC/2018Team1.jpg";
import Team2_2018 from "../../../../../images/ICPC/2018Team2.jpg";
import Team3_2018 from "../../../../../images/ICPC/2018Team3.jpg";
import Team4_2018 from "../../../../../images/ICPC/2018Team4.jpg";

// Define events here as components
const ICPC2019 = () => {
  return (
    <div>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        All our teams had a great showing by completeing at least three
        problems. Our top team placed 14th out of 160 teams.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <img
            src={Team1_2019}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team2_2019}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team3_2019}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team4_2019}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const ICPC2018 = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <img
            src={Team1_2018}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team2_2018}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team3_2018}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={Team4_2018}
            style={{ width: "100%" }}
            alt="2019 ICPC Team"
          />
        </Grid>
      </Grid>
    </div>
  );
};

interface IEvent {
  name: string;
  body: React.ComponentType;
}

const Events: IEvent[] = [
  {
    name: "2019 ICPC Mid-Atlantic Regional Programming Contest",
    body: ICPC2019,
  },
  {
    name: "2018 ICPC Mid-Atlantic Regional Programming Contest",
    body: ICPC2018,
  },
];

const PastEvents = () => {
  return (
    <div>
      {Events.map((event: IEvent, key) => {
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{event.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <event.body />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default PastEvents;
