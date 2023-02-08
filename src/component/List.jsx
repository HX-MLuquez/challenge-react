import React from "react";

export default function List({ lista }) {
  return (
    <div>
      {lista.length > 0
        ? lista.map((c) => {
            return <h3 key={c.id}>{c.name}</h3>;
          })
        : null}
    </div>
  );
}
