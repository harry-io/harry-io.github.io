import React from "react";

const Stats = () => {
  return (
    <div className="git_stats_streaks">
      <div className="git_card">
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=harry-io&theme=violet-dark&hide_border=true&border_radius=0&background=212237&ring=00ff00&border=00ff00&stroke=00ff00&currStreakNum=00ff00&fire=DD2727&sideNums=00ff00&currStreakLabel=00ff00&sideLabels=00ff00&dates=00ff00"
          alt="streaks"
        />
      </div>
      <div className="git_card">
        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=harry-io&show_icons=true&theme=transparent&bg_color=212237&title_color=00ff00&text_color=00ff00&icon_color=DD2727&text_bold=false&border_radius=0&hide_border=true"
          alt="stats"
        />
      </div>
      <div className="git_card">
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=harry-io&layout=compact&title_color=00ff00&bg_color=212237&hide_border=true&text_color=00ff00"
          alt="streaks"
        />
      </div>
    </div>
  );
};

export default Stats;
