import { Temple } from "../data/Temple";

export const TempleComponent = (temple: Temple) => {
  return (
    <div className="card">
      <img className="card-img-top" src={temple.image} />
      <div className="card-body">
        <input type="checkbox" ></input>
        <h5 className="card-title">{temple.name}</h5>
        <p className="card-text">{temple.description}</p>
        
      </div>
    </div>
  );
};
