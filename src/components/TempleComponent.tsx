import { Temple } from "../data/Temple";
import './TempleComponent.css';



interface TempleProps {
  temple: Temple; 
}

export const TempleComponent = ({ temple }: TempleProps) => {
  return (
    <div className="card border-black" >
      <img className="card-img-top img-container" style={{backgroundImage: `url(${temple.photourl})`}} />
      <div className="card-body">
        <input type="checkbox" />
        <h5 className="card-title">{temple.templename}</h5>
        <p className="card-text">{temple.mailaddress}</p>
        
      </div>
    </div>
  );
};
