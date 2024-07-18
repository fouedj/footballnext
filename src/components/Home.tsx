"use client";

import React, { useEffect, useState } from "react";
import TeamList from "@/components/TeamList";
import { API_ENDPOINTS } from "@/utility/types/config";
import { useTranslation } from "react-i18next";

async function getTeams(league: string) {
  const res = await fetch(API_ENDPOINTS.getTeams(league));
  return res.json();
}

interface HomeContainerProps {
  searchItem: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ searchItem }) => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getTeams(searchItem);
      setData(result);
    }

    fetchData();
  }, [searchItem]);

  return (
    <div className="bg-white">
      <h2>{t("teamList")}</h2>
      <TeamList initialData={data} />
    </div>
  );
};

export default HomeContainer;
