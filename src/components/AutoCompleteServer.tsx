import React from "react";
import "../styles/autocomplete.css";
import AutoCompleteClient from "./AutoCompleteClient";
import { API_ENDPOINTS } from "@/utility/types/config";

interface AutoCompleteProps {}
const getAllLeagues = async () => {
  const data = await fetch(API_ENDPOINTS.getAllLeagues);
  return data.json();
};

const AutoComplete: React.FC<AutoCompleteProps> = async () => {
  const data = await getAllLeagues();
  return <AutoCompleteClient suggestions={data} />;
};

export default AutoComplete;
