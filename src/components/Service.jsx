// eslint-disable-next-line no-unused-vars
import React from "react";

function Service() {
  return (
    <div className="card-container">
      <h2><span>Pelayanan </span>&nbsp;Kami</h2>
        <div className="card">
          <img src="/assets/pelayanan/trimming.png" alt="Trimming"/>
          <h3>-Trimming-</h3>
          <p><button>Add to Cart</button></p>
        </div>
        <div className="card">
          <img src="/assets/pelayanan/Coloring.png" alt="Coloring"/>
          <h3>-Coloring-</h3>
          <p><button>Add to Cart</button></p>
        </div>
        <div className="card">
          <img src="/assets/pelayanan/Grooming.png" alt="Grooming"/>
          <h3>-Grooming-</h3>
          <p><button>Add to Cart</button></p>
        </div>
    </div>
  );
}

export default Service;
