import { Temple } from "../data/Temple";

interface TempleProps {
  temple: Temple; 
}

export const TempleComponent = ({ temple }: TempleProps) => {
  return (
    <div className="card">
      <img className="card-img-top" src={temple.photourl} />
      <div className="card-body">
        <input type="checkbox" ></input>
        <h5 className="card-title">{temple.templename}</h5>
        <p className="card-text">{temple.mailaddress}</p>
        
      </div>
    </div>
  );
};
