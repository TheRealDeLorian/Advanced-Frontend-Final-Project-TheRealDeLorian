import { useLocation, useNavigate } from "react-router-dom";
import { SelfieInput } from "../../components/customInputs/SelfieInput";
import { Visit } from "../../data/Visit";
import { useCreateVisitMutation } from "../../hooks/visitHooks";
import { getUserFromCookie } from "../../authentication/getUserFromCookie";
import { useEffect, useState } from "react";
import { Person } from "../../data/Person";

export const NewEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState<
    Person | undefined
  >(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromCookie();
      setCurrentLoggedInUser(user);
    };

    fetchUser();
  }, []);

  const { temple } = location.state || {};
  const createVisitMutation = useCreateVisitMutation();
  const [journalEntry, setJournalEntry] = useState("");
  const handleJournalEntryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJournalEntry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!currentLoggedInUser) {
      console.error("User is not logged in");
      return;
    }

    const newEntry: Visit = {
      id: -1, //the api ignores this and auto-assigns a serial id before adding to db
      note: journalEntry,
      personid: currentLoggedInUser.id,
      templeid: temple.id,
      visittime: new Date(),
    };

    console.log("New Entry:", newEntry);
    createVisitMutation.mutate(newEntry, {
      onSuccess: () => {
        console.log("Visit added successfully!");
        navigate("/journal");
      },
      onError: (error) => {
        console.error("Error adding visit:", error);
      },
    });
  };

  return (
    <div style={{ position: "relative", padding: "2rem", height: "100vh" }}>
      <h1
        className="content-center slide-down"
        style={{ fontSize: "4rem", fontWeight: "bold", textAlign: "center" }}
      >
        {temple.templename} Temple
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: `url(${temple.photourl}) no-repeat center center`,
          backgroundSize: "cover",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "calc(100% - 6rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* <SelfieInput /> */}
        <textarea
          value={journalEntry}
          onChange={handleJournalEntryChange}
          placeholder="Write about your experience..."
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            resize: "vertical",
            flexGrow: 1,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            alignSelf: "flex-end",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
