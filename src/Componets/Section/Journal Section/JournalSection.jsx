import React from "react";
import LabelMidle from "../../Elements/Label/LabelMidle";
import CardJournal from "../../Elements/Card/CardJournal";
import CardJournalData from "../../Elements/Card/CardJournalData";

const Journal = () => {
  return (
    <div className="container mt-32">
      <LabelMidle tagtext="Journey Journal" title="Our Blog and Articles" />
      <CardJournal details={CardJournalData} />
    </div>
  );
};

export default Journal;
