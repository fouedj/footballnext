export const BASE_URL = "http://localhost:3000";
export const API_ENDPOINTS = {
  getTeams: (league: string) =>
    `${BASE_URL}/api/team/in-league?league=${league}`,
  getAllLeagues: `${BASE_URL}/api/league/allLeagues`,
  getPlayersByTeam: (teamId: string) => `${BASE_URL}/player/team/${teamId}`,
};
