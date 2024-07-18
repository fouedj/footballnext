import React from "react";
import HomeContainer from "@/components/Home";
import AutoComplete from "@/components/AutoCompleteServer";
import { useRouter } from "next/router";

interface LeaguesPageProps {
  searchParams: { [key: string]: string };
  params: { league?: string };
}

const LeaguesPage: React.FC<LeaguesPageProps> = ({ searchParams, params }) => {
  return (
    <div className="bg-white">
      <AutoComplete />
      <HomeContainer searchItem={params.league || ""} />
    </div>
  );
};

export default LeaguesPage;
