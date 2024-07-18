import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../styles/TeamList.css";
import { Team } from "../utility/types/types";
import Image from "next/image";

interface TeamListProps {
  initialData: Team[] | null;
}

const TeamList: React.FC<TeamListProps> = ({ initialData }) => {
  return (
    <div className="team-list-container">
      <div className="language-switcher-container">
        <label htmlFor="language-select" className="language-label">
          {/* {t("language")}: */}
        </label>
      </div>
      {/* <h1>{t("teamList")}</h1> */}
      <div className="my-5 flex flex-col items-center"></div>

      <div className="team-list">
        {initialData?.map((team) => (
          <Link
            href={`/teams/${team.idTeam}`}
            key={team.idLeague}
            className="team-item"
          >
            <Image
              src={team.strBadge}
              alt="Team badge"
              width={100}
              height={100}
              className="team-badge"
            />
            {team.strTeam}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
