import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      // Makes list bullets aligned with other text
      paddingInlineStart: "20px",
    },
  })
);

const Resources: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h3" align="left" gutterBottom>
        Resources
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        This page contains a list of resources that we have found to be useful
        for competitive programming and technical interviews. Please{" "}
        <a
          href="mailto:acm-uncc@uncc.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          email us
        </a>{" "}
        if you have any suggestions for things to add to this page.
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Books
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        <ul className={classes.list}>
          <li>
            <a
              href="https://cses.fi/book/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Competitive Programmer's Handbook
            </a>
          </li>
          <li>
            <a
              href="https://algs4.cs.princeton.edu/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithms, 4th Edition
            </a>
          </li>
          <li>
            <a
              href="https://elementsofprogramminginterviews.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elements of Programming Interviews
            </a>
          </li>
          <li>
            <a
              href="http://www.crackingthecodinginterview.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cracking the Coding Interview
            </a>
          </li>
        </ul>
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Websites
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        <ul className={classes.list}>
          <li>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://open.kattis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kattis
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerRank
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksforGeeks
            </a>
          </li>
        </ul>
      </Typography>
      <Typography variant="h4" component="h4" align="left" gutterBottom>
        Videos
      </Typography>
      <Typography variant="body1" align="left" gutterBottom paragraph>
        <ul className={classes.list}>
          <li>
            <a
              href="https://www.coursera.org/learn/algorithms-part1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithms, Part I
            </a>
          </li>
          <li>
            <a
              href="https://www.coursera.org/learn/algorithms-part2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithms, Part II
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back To Back SWE
            </a>
          </li>
        </ul>
      </Typography>
    </div>
  );
};

export default Resources;
