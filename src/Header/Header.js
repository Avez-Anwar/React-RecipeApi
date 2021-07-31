import axios from "axios";
import React, { useState } from "react";
import Image from "../Image/Image";

function Header() {
  const [timeoutId, setTimeoutId] = useState();
  const [fetchData, setFetchData] = useState([]);

  const fetchApi = async (searchEvent) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchEvent}&app_id=5f5b1dbd&app_key=0eaa790ae8de429e56157e8de9b91bff`
    );
    setFetchData(response.data.hits);
    console.log(response.data.hits);
  };
  const handleChange = (e) => {
    const timeout = setTimeout(() => {
      fetchApi(e.target.value);
    }, 500);
    setTimeoutId(timeout);
    clearTimeout(timeoutId);
  };

  return (
    <div>
      <div>
        <label>Search: </label>
        <input onChange={handleChange} />
      </div>
      <br />
      <div>
        {fetchData.map((posts, index) => {
          return <Image key={index} posts={posts.recipe} />;
        })}
      </div>
    </div>
  );
}

export default Header;
