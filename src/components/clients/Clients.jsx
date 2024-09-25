import React from "react";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import "./clients.scss";

const clients = [client1, client2, client3];

const Clients = () => {
  return (
    <div className="clients-container">
      <h1 className="clients-header">Our Clients</h1>
      <div className="clients-inner">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
