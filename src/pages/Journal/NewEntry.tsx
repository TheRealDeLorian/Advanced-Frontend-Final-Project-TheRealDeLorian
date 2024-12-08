import { useLocation } from "react-router-dom";
import { SelfieInput } from "../../components/customInputs/SelfieInput";
import { Visit } from "../../data/Visit";
import { useState } from "react";

export const NewEntry = () => {
  const location = useLocation();
  const { temple } = location.state || {};

  const [journalEntry, setJournalEntry] = useState('');
  const handleJournalEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEntry: Visit = {
      id: Math.random(),
      note: journalEntry,
      templeid: temple.id,
      visittime: new Date(),
    };

    console.log("New Entry:", newEntry);
  };

  return (
    <div>
      <h2>{temple.templename} Temple</h2>
      <form onSubmit={handleSubmit}>
        <SelfieInput />
        <textarea 
          value={journalEntry} 
          onChange={handleJournalEntryChange} 
          placeholder="Write about your experience..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
