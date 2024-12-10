// src/pages/Journal/Journal.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Entry} from '../../components/customLayouts/Entry';
import { Visit } from '../../data/Visit';

const baseUrl = import.meta.env.VITE_API_URL + "/api";

export const Journal: React.FC = () => {
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get(baseUrl + '/Visit/1');
        setVisits(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching visits:', error);
      }
    };

    fetchVisits();
  }, []);

  const deleteVisit = async (id: number) => {
    try {
      await axios.delete(`/api/Visit/${id}`);
      setVisits(visits.filter(visit => visit.id !== id));
    } catch (error) {
      console.error('Error deleting visit:', error);
    }
  };

  return (
    <>
    <h3>Your journal entries</h3>
      <div className="row">
        {visits.map(visit => (
          <Entry key={visit.id} visit={visit} onDelete={deleteVisit} />
        ))}
      </div>
      
    </>
  );
};