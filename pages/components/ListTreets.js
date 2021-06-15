import React, { Fragment, useEffect, useState } from "react";
import Treet from "./Treet";

const ListTreets = () => {
  const [treets, setTreets] = useState([]);

  const getTreets = async () => {
    try {
      const response = await fetch("http://localhost:5000/treets");
      const jsonData = await response.json();

      setTreets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTreets();
  }, []);

  return (
    <Fragment>
      <div>
        {treets.map((treet) => (
          <Treet key={treet.treet_id} treet={treet}></Treet>
        ))}
      </div>
    </Fragment>
  );
};
export default ListTreets;
