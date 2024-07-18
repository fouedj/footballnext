import React from "react";
import "../styles/PlayerList.css";
import { useTranslation } from "react-i18next";
import { Player } from "@/utility/types/types";
import Image from "next/image";

export default function PlayerList({ players }: any) {
  //   const { t } = useTranslation();
  return (
    <div className="player-list-container">
      {/* <button
        className="back-button"
        onClick={() => {
          console.log("hello");
        }}
      >
        &#8592; {t("back")}
      </button> */}
      {/* {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )} */}
      <ul className="player-list">
        {players?.map((player: Player) => (
          <li key={player.idPlayer} className="player-item">
            <div className="player-image-container">
              <Image
                src={player.strCutout}
                alt="Player Image"
                className="w-full h-full object-cover rounded-full shadow-md"
                width={100}
                height={100}
              />
            </div>
            <div className="player-name">{player.strPlayer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
