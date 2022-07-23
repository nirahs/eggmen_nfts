// React
import { useState } from "react";

// CSS
import "./cards.css";

// Component
import Loading from "../Loading";

const Cards = ({ pending, collection, error }) => {
  const [activeCard, setActiveCard] = useState(0);

  if (
    Boolean(!pending) &&
    Boolean(!error) &&
    Boolean(collection) &&
    Boolean(collection.length > 0)
  ) {
    return (
      <section className="cards">
        <div className="card-wrapper flex-container flex-center">
          {collection.map((blobURL, index) => {
            return (
              <div
                key={index}
                className={`card flex-container flex-center ${
                  collection.length === 1
                    ? "active"
                    : index === activeCard
                    ? "active"
                    : ""
                }`}>
                <img
                  src={blobURL}
                  alt={`Minted token ${index}`}
                  className="token"
                />
              </div>
            );
          })}
        </div>

        {Boolean(collection.length > 1) && (
          <div className="card-links-wrapper flex-container flex-center">
            {collection.map((blobURL, index) => {
              return (
                <a
                  key={index}
                  onClick={() => {
                    setActiveCard(index);
                  }}
                  className="link link-dark card-link">
                  {index + 1}
                </a>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="cards">
      <div className="card-wrapper flex-container flex-center">
        {Boolean(pending) && Boolean(!error) && Boolean(!collection) && (
          <Loading inline={true} />
        )}
      </div>
    </section>
  );
};

export default Cards;
