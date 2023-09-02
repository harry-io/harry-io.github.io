import React from "react";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "./GitCalender.css";
import { BiStats } from "react-icons/bi";

const GitCalender = () => {
  return (
    <div className="git_stats_main_container">
      <h2 className="git_heading">
        <p>GITHUB STATS</p>
        <BiStats style={{ fontSize: "2.5rem" }} />
      </h2>

      <div className="git_calender">
        <GitHubCalendar
          blockSize={19}
          username="harry-io"
          hideTotalCount
          fontSize={16}
          color="#00ff00"
          blockRadius={2}
          showWeekdayLabels={false}
          hideColorLegend={true}
        >
          <ReactTooltip html />
        </GitHubCalendar>
      </div>
    </div>
  );
};

export default GitCalender;
