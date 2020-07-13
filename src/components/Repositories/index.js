import React from "react";
import { IconText } from "../";
import starIcon from "../../assets/icons/star-icon.svg";
import "./repositories.css";

const Repositories = ({ repos }) => {
  return (
    <div>
      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((repo, index) => {
          return (
            <div key={`repoBox--${index + 1}`} className="repoBox">
              <h2 className="repositories-title">{repo.name}</h2>
              <p className="repositories-paragraph">{repo.description}</p>
              <IconText
                icon={starIcon}
                alt="organization icon"
                classIcon="icon-repositories"
              >
                {repo.stargazers_count}
              </IconText>
            </div>
          );
        })}
    </div>
  );
};

export default Repositories;
