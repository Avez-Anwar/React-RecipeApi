import React, { useState } from "react";

function Header() {
  const [fetchData, setFetchData] = useState([]);

  const handleChange = () => {};

  return (
    <div>
      <div>
        <label>Search: </label>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

export default Header;
