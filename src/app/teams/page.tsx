import React from "react";
import HomeContainer from "@/components/Home";
import AutoComplete from "@/components/AutoCompleteServer";

interface TeamsPageProps {
  params: { league?: string };
}

const TeamsPage: React.FC<TeamsPageProps> = ({ params }) => {
  return (
    <div className="bg-white">
      <AutoComplete />
      <HomeContainer searchItem={params.league || ""} />
    </div>
  );
};

export default TeamsPage;
