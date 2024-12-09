import React from 'react';
import { Visit } from '../../data/Visit';
import { useGetAllTemplesQuery } from '../../hooks/templeHooks';

interface EntryProps {
  visit: Visit;
  onDelete: (id: number) => void;
}

export const Entry: React.FC<EntryProps> = ({ visit }) => {
  const templesQuery = useGetAllTemplesQuery();
  const temples = templesQuery.data;

  if (!visit) {
    return <div>Visit not found. Please try again later.</div>;
  }

  const temple = temples?.find(t => t.id === visit.templeid);
  const templeName = temple ? temple.templename : 'Unknown Temple';

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={temple?.photourl} className="card-img-top" alt={templeName} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{templeName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{visit.visittime?.toString()}</h6>
        <p className="card-text">{visit.note}</p>
        {/* <button onClick={() => onDelete(visit.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaTrash />
        </button> */}
      </div>
    </div>
  );
};
