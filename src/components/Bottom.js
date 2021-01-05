import React from "react";

function Bottom() {
  return (
    <div style={{ backgroundColor: "black", marginTop: "50px" }}>
      <h2 style={{ color: "white", textAlign: "center" }}>
        Copyrights
        <a dangerouslySetInnerHTML={{ __html: " &copy; " }} />
        2021 by Denzel
      </h2>
    </div>
  );
}

export default Bottom;
