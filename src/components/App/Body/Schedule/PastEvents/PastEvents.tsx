import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";

// Define events here as components
const ICPC2019 = () => {
  return (
    <div>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        All our teams had a great showing by completeing at least three
        problems. Our top team placed 14th out of 160 teams.
      </Typography>
    </div>
  );
};

interface IEvent {
  name: string;
  body: React.ComponentType;
}

const Events: IEvent[] = [
  {
    name: "ICPC Mid-Atlantic Regional Programming Contest (11/9/2019)",
    body: ICPC2019,
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
