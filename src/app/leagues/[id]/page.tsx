import React from "react";
import HomeContainer from "@/components/Home";
import AutoComplete from "@/components/AutoCompleteServer";

interface LeaguesPageProps {
  params: { id?: string };
}

const LeaguesPage: React.FC<LeaguesPageProps> = ({ params }) => {
  return (
    <div className="bg-white">
      <AutoComplete />
      <HomeContainer searchItem={params.id || ""} />
    </div>
  );
};

export default LeaguesPage;
