import React from "react";

const Stats = () => {
  return (
    <div className="git_stats_streaks">
      <div className="git_card">
        <img
          id="github-streak-stats"
          src="https://streak-stats.demolab.com/?user=harry-io&background=75b90000&hide_border=true&color=#fff"
          alt="streaks"
        />
      </div>
      <div className="git_card">
        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=harry-io&show_icons=true&theme=transparent&bg_color=75b90000&text_bold=false&border_radius=0&hide_border=true"
          alt="stats"
        />
      </div>
      <div className="git_card">
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=harry-io&layout=compact&bg_color=75b90000&hide_border=true"
          alt="streaks"
        />
      </div>
    </div>
  );
};

export default Stats;
