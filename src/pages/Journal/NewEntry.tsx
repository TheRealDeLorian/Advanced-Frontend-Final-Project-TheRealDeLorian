import { useState } from 'react';
import { SelfieInput } from '../../components/customInputs/SelfieInput'
import { Visit } from '../../data/Visit';

interface NewEntryProps {
  templeId: number
}

export const NewEntry = ({templeId}: NewEntryProps) => {
  const [journalEntry, setJournalEntry] = useState('');
  const handleJournalEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newEntry: Visit = {
      id: Math.random(),
      note: journalEntry,
      templeid: templeId,
      visittime: new Date()
    }

    
  }

  return (
    <div>
    <form onSubmit={handleSubmit}> 
      {/*custom inputs here. we want
      start by uploading a selfie
      temple (gets current location and finds nearest temples. if you're too far it will tell you to go closer)
      date (defaults to today)
      

      */}
      <SelfieInput/>
      <textarea value={journalEntry} onChange={handleJournalEntryChange} />
    </form>
    </div>
  )
}
