import { useLocation } from "react-router-dom";
import { SelfieInput } from "../../components/customInputs/SelfieInput";
import { Visit } from "../../data/Visit";
import { useEffect, useState } from "react";
import { useCreateVisitMutation } from "../../hooks/visitHooks";
import { getUserFromCookie } from "../../authentication/getUserFromCookie";
import { Person } from "../../data/Person";

export const NewEntry = () => {
  const location = useLocation();
  const [user, setUser] = useState<Person | undefined>(undefined);
  
  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserFromCookie();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  const { temple } = location.state || {};
  const createVisitMutation = useCreateVisitMutation();
  const [journalEntry, setJournalEntry] = useState('');
  const handleJournalEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value);
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
      const newEntry: Visit = {
        id: 0,
        note: journalEntry,
        personid: 1,
        templeid: temple.id,
        visittime: "2024-12-08T23:39:29.367Z",
      };
      
      console.log("New Entry:", newEntry);
      createVisitMutation.mutate(newEntry, {
        onSuccess: () => {
          console.log("Visit added successfully!");
        },
        onError: (error) => {
          console.error("Error adding visit:", error);
        },
      });
   
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
