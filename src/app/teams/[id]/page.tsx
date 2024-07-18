import PlayerList from "@/components/player-list";
import { API_ENDPOINTS } from "@/utility/types/config";
import { Player } from "@/utility/types/types";
import React from "react";
async function getPlayers(id: string): Promise<Team> {
  const res = await fetch(API_ENDPOINTS.getPlayersByTeam(id));
  if (!res.ok) {
    throw new Error("Failed to fetch team players");
  }
  return res.json();
}
interface Team {
  name: string;
  players: Player[];
}

interface TeamsDetailsProps {
  params: { id: string };
}
const TeamsDetails: React.FC<TeamsDetailsProps> = async ({ params }) => {
  const team = await getPlayers(params.id);

  return (
    <div>
      <h1>{team?.name}</h1>
      {/*  <h2>{t("playerList")}</h2>*/}
      <PlayerList players={team.players} />
    </div>
  );
};

export default TeamsDetails;
